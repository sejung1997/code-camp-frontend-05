import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/commons/layout/";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/library/getAccessToken";
// Import the functions you need from the SDKs you need

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
interface IGlobalContext {
  acessToken?: String;
  setAcessToken?: Dispatch<SetStateAction<String>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [acessToken, setAcessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const Value = {
    acessToken,
    setAcessToken,
    userInfo,
    setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAcessToken(localStorage.getItem("accessToken") || "");
    }
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || ""));
    }
    getAccessToken().then((newAccessToken) => {
      setAcessToken(newAccessToken);
    });
  }, []);

  const errolink = onError(({ graphQlErrors, operation, forward }) => {
    // 1. 에러를 캐치
    if (graphQlErrors) {
      for (const err of graphQlErrors) {
        // 2. 해당 에러가 토큰 만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 3. refreshToken으로 accessToken을 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 4. 재발급 받은 accessToken을 저장하기
            setAcessToken(newAccessToken);

            // 5. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            operation.setContext({
              ...operation.getContext().headers,
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            }); // 설정 변경(accessToken만 바꿔치기)
            return forward(operation); // 변경된 operation 재요청하기
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${acessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errolink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    // connectToDevTools: true,
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
