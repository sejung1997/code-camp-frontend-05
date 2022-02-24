import { globalStyles } from "../scr/components/commons/styles/globalStyles";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../scr/components/commons/layout";
import { Global } from "@emotion/react";
import { createUploadLink } from "apollo-upload-client";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../scr/commons/library/getAccessToken";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { widthAuth } from "../scr/components/commons/hocs/withAuth";
import LoginSucessPage from "./lecture/2302-login-sucess-localStorage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKuvXdnbVt_wGrkNu0u-7J63ureJxcbXI",
  authDomain: "codecampclass.firebaseapp.com",
  projectId: "codecampclass",
  storageBucket: "codecampclass.appspot.com",
  messagingSenderId: "267862488256",
  appId: "1:267862488256:web:e05bfb60a9177277752925",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: String;
  email?: string;
  picture?: string;
}
interface IGlobalContext {
  accessToken?: String;
  setAcessToken?: Dispatch<SetStateAction<String>>;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
  userInfo?: IUserInfo;
}
export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAcessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const Value = {
    accessToken,
    setAcessToken,
    userInfo,
    setUserInfo,
  };
  //

  // 브라우져 일때
  // if (typeof window !== "undefined") {
  //   if (localStorage.getItem("accessToken")) {
  //     setAcessToken(localStorage.getItem("accessToken") || "");
  //   }
  // }
  // useEfect는 서버에서 실행 안되고 브라우져에서만
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAcessToken(localStorage.getItem("accessToken") || "");
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

  // @ts-ignore
  const uploadLink = createUploadLink({
    uri: "https://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errolink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          {/* <>{widthAuth(LoginSucessPage)}({...pageProps} />)</> */}
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}
export default MyApp;
