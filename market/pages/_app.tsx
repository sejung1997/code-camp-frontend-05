import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import Layout from "../src/commons/layout/index";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// Import the functions you need from the SDKs you need
import { onError } from "@apollo/client/link/error";

import { initializeApp } from "firebase/app";
import {
  createContext,
  SetStateAction,
  useState,
  Dispatch,
  useEffect,
} from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB58-YBL3hUNRRHGNGpkfmQwwRopt_Xv4k",
  authDomain: "myboard-c6858.firebaseapp.com",
  projectId: "myboard-c6858",
  storageBucket: "myboard-c6858.appspot.com",
  messagingSenderId: "121445630671",
  appId: "1:121445630671:web:af1811772be67adba66dba",
};

// Initialize Firebaseexport
export const fireApp = initializeApp(firebaseConfig);
interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
  createdAt?: string;
}
interface IToday {
  id?: string;
  seller?: string;
  product?: string;
  images?: string[];
  price?: Number;
  name?: string;
}
interface IGlobalContext {
  acessToken?: String;
  setAcessToken?: Dispatch<SetStateAction<String>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
  setTodayProduct?: Dispatch<SetStateAction<IToday[]>>;
  todayProduct?: IToday[];
  date?: string;
  point?: Number;
  setPoint?: Dispatch<SetStateAction<Number>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const date = String(new Date()).slice(0, 10);

  const [acessToken, setAcessToken] = useState("");
  const [point, setPoint] = useState(0);
  const [todayProduct, setTodayProduct] = useState([]);
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const Value = {
    acessToken,
    setAcessToken,
    userInfo,
    setUserInfo,
    todayProduct,
    setTodayProduct,
    point,
    setPoint,
    date,
  };

  useEffect(() => {
    // if (localStorage.getItem("accessToken")) {
    //   setAcessToken(localStorage.getItem("accessToken") || "");
    // }
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")) || "{}");
    }
    getAccessToken().then((newAccessToken) => {
      setAcessToken(newAccessToken);
    });
    if (localStorage.getItem(date)) {
      setTodayProduct(JSON.parse(localStorage.getItem(date)) || "[]");
    }
    if (localStorage.getItem("point")) {
      setPoint(Number(JSON.parse(localStorage.getItem("point"))));
    }
  }, []);
  // useEffect(() => {
  //   if (localStorage.getItem("today")) {
  //     setTodayProduct(JSON.parse(localStorage.getItem("today")) || "[]");
  //   }
  // }, [localStorage]);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. 해당 에러가 토큰만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken 저장하기
            setAcessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // operation에 실패한 쿼리들 들어가있음
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정 변경(accessToken만!! 바꿔치기)
            return forward(operation); // 변경된 operation 재요청하기!!
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql05",
    headers: { Authorization: `Bearer ${acessToken}` },
    credentials: "include",
    //  백엔드에서 받은 리프레쉬 토큰을 쿠키에 추가하기 위해선 https와 credentials:include 를 해준다.
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
