import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/commons/layout/";
import { Global } from "@emotion/react";

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
