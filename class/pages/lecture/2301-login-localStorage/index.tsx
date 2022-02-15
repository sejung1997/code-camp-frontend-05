import { useMutation, gql } from "@apollo/client";
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
export default function LoginPage() {
  const router = useRouter();
  const { setAcessToken } = useContext(GlobalContext);
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
      const result = await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken || "";

      if (setAcessToken) {
        setAcessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);

        console.log(localStorage.getItem("accessToken"));
      }
      router.push("/lecture/2302-login-sucess");
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
