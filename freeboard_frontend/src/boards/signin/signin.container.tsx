import { LOGIN_USER, IBoardSignInPageProps } from "./signIn.gql.types";
import { useMutation } from "@apollo/client";
import SignUpPageUI from "./signIn.presenter";
import { ChangeEvent, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/types/generated/types";

export default function SignUpPage(props: IBoardSignInPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    isValid: false,
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  if (inputs.email && inputs.password) inputs.isValid = true;
  if (!inputs.email || !inputs.password) inputs.isValid = false;

  const register = async () => {
    console.log(inputs);
    try {
      console.log(inputs);
      await loginUser({
        variables: {
          email: inputs.email,
          password: inputs.password,
        },
      });
      props.Cancel();
      message.info("로그인이 완료되었습니다");
    } catch (error) {
      message.info(error.message);
    }
  };

  return (
    <SignUpPageUI
      changeInputs={changeInputs}
      inputs={inputs}
      register={register}
      Cancel={props.Cancel}
      isVisible={props.isVisible}
    />
  );
}
