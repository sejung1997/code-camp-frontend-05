import LandingPage from "../src/units/landing/Landing.container";
import Head from "next/head";
import { gql, request } from "graphql-request";
import { FETCH_USED_ITEMS } from "../src/units/List/gql&types";
export default function Home(props) {
  console.log(props.data, "propsData");
  return (
    <>
      <Head>
        <meta property="og:title" content="Green Market" />
        <meta property="og:description" content="우리 동네에 신선한 반찬" />
      </Head>
      <LandingPage />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend05.codebootcamp.co.kr/graphql05",
    FETCH_USED_ITEMS,
    {
      page: "1",
    }
  );
  return {
    props: {
      data: {
        ...result,
      },
    },
  }; // return 값이 Home(props) 실행
};
