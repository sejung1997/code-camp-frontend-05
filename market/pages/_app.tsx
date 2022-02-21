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
interface IToday {
  id?: string;
  seller?: string;
  product?: string;
  price?: Number;
}
interface IGlobalContext {
  acessToken?: String;
  setAcessToken?: Dispatch<SetStateAction<String>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
  setTodayProduct?: Dispatch<SetStateAction<IToday>>;
  todayProduct?: [];
}
export const GlobalContext = createContext<IGlobalContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [acessToken, setAcessToken] = useState("");
  const [todayProduct, setTodayProduct] = useState([]);
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const Value = {
    acessToken,
    setAcessToken,
    userInfo,
    setUserInfo,
    todayProduct,
    setTodayProduct,
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAcessToken(localStorage.getItem("accessToken") || "");
    }
    if (localStorage.getItem("userInfo")) {
      setUserInfo(JSON.parse(localStorage.getItem("userInfo")) || "{}");
    }
    if (localStorage.getItem("today")) {
      setTodayProduct(JSON.parse(localStorage.getItem("today")) || "[]");
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${acessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={Value}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
