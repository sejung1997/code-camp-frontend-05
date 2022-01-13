import '../styles/globals.css'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

function MyApp({ Component, pageProps }) {


  const client = new ApolloClient({
    uri: "http:/example.codebootcamp.co.kr/graphql",
    Cache: new InMemoryCache()
  })


  return (
    <ApolloProvider>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}


export default MyApp
