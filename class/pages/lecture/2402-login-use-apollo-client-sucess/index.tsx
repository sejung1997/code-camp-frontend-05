import { gql, useQuery } from "@apollo/client";
import { message } from "antd";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { widthAuth } from "../../../scr/components/commons/hocs/withAuth";
import { GlobalContext } from "../../_app";

const LoginSucessPage = () => {
  const { userInfo } = useContext(GlobalContext);
  // const router = useRouter();
  // const { data } =
  //   useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     message.info("로그인을 먼저해주세요");
  //     router.push("/lecture/2304-login-check");
  //   }
  // }, []);

  return <div>{userInfo?.name}님 환영합니다.</div>;
};
export default widthAuth(LoginSucessPage);
