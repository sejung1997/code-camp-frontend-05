import { CREATE_USER } from "./signin.gql.types";
import { useMutation } from "@apollo/client";
import SignInPageUI from "./signin.presenter";
import { useState } from "react";
import { message } from "antd";

export default function SignInPage() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [createUser] = useMutation(CREATE_USER);

  const changeInputs = (evnet) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const register = async () => {
    try {
      await createUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
          name: inputs.name,
        },
      });
      message.info("회원가입이 완료되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SignInPageUI
      changeInputs={changeInputs}
      inputs={inputs}
      register={register}
    />
  );
}
