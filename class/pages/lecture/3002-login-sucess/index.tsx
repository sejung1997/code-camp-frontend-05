import { gql, useQuery } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../_app";
import { IQuery } from "../../../scr/commons/types/generated/type";
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
const LoginSucessPage = () => {
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     message.info("로그인을 먼저해주세요");
  //     router.push("/lecture/2304-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn?.name}님 환영합니다.</div>;
};
export default LoginSucessPage;
