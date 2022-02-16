import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useContext } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../scr/commons/types/generated/type";
import { GlobalContext } from "../../_app";
const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
const FETCH_USER_LOGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginPage() {
  const router = useRouter();
  const client = useApolloClient();
  const { setAcessToken, setUserInfo } = useContext(GlobalContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER); // < 받아오는 데이터 타입, 보내는 데이터 타입 >

  // <Omit> => 특정 데이터 뺴고 나마지 다 가져오기
  // <Partial> => 변수 뒤에 ? 붙여서 가져오기
  const onchangeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const onclickLogin = async () => {
    try {
      // 로그인하기
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";
      // 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGED_IN,
        // app에서 세팅되어서 없어도 됨
      });

      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      // 글로벌 스테이트에 저장하기
      if (setAcessToken) setAcessToken(accessToken);
      if (setUserInfo) setUserInfo(userInfo);

      // refreshToken 배우기 전까지 임시로 저장하기
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      console.log(localStorage.getItem("accessToken"));
      console.log(localStorage.getItem("userInfo"));

      router.push("/lecture/2402-login-use-apollo-client-sucess");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return (
    <div>
      <div>
        이메일: <input type="text" onChange={onchangeInputs} id="email" />
        <input type="password" onChange={onchangeInputs} id="password" />
        <button onClick={onclickLogin}>로그인하기</button>
      </div>
    </div>
  );
}
