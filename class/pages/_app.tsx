import { globalStyles } from "../scr/components/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../scr/components/commons/layout";
import { Global } from "@emotion/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
