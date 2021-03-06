import { globalStyles } from "../src/commons/styles/GlobalStyles";
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
    // 1. ????????? ??????
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 2. ?????? ????????? ???????????? ???????????? ??????(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken?????? accessToken??? ????????? ??????
          getAccessToken().then((newAccessToken) => {
            // 4. ????????? ?????? accessToken ????????????
            setAcessToken(newAccessToken);

            // 5. ????????? ?????? accessToken?????? ?????? ????????? ?????? ???????????????
            // operation??? ????????? ????????? ???????????????
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // ?????? ??????(accessToken???!! ????????????)
            return forward(operation); // ????????? operation ???????????????!!
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${acessToken}` },
    credentials: "include",
    //  ??????????????? ?????? ???????????? ????????? ????????? ???????????? ????????? https??? credentials:include ??? ?????????.
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
