import { useMutation, gql, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useContext } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../scr/commons/types/generated/type";
import { GlobalContext } from "../../_app";
const LOGIN_USER_EXAMPLE = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
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
  const [loginUserExample] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER_EXAMPLE); // < 받아오는 데이터 타입, 보내는 데이터 타입 >

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
      const result = await loginUserExample({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      const accessToken = result.data?.loginUserExample.accessToken || "";

      // 글로벌 스테이트에 저장하기
      if (setAcessToken) setAcessToken(accessToken);

      router.push("/lecture/3002-login-sucess");
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
