import { CREATE_USER, IBoardSignUpPageProps } from "./signup.gql.types";
import { useMutation } from "@apollo/client";
import SignUpPageUI from "./signup.presenter";
import { ChangeEvent, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/types/generated/types";

export default function SignUpPage(props: IBoardSignUpPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    domainAdress: "",
  });
  const [validMsg, setValidMsg] = useState({
    emailMsg: "",
    passMsg: "",
  });
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (event.target.id === "password2") {
      setValidMsg({ ...validMsg, passMsg: "비밀번호가 일치하지 않습니다" });
    }
    if (inputs.password === inputs.password2)
      setValidMsg({ ...validMsg, passMsg: "비밀번호가 일치합니다" });
  };

  const register = async () => {
    try {
      console.log(inputs);
      await createUser({
        variables: {
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
        },
      });
      props.Cancel();
      message.info("회원가입이 완료되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };
  // if (inputs.email && inputs.email.includes("@"))
  //   setValidMsg({ ...validMsg, emailMsg: "사용 가능한 이메일 입니다." });
  // else setValidMsg({ ...validMsg, emailMsg: "사용 불가능한 이메일 입니다." });
  const isValid =
    validMsg.emailMsg === "사용 가능한 이메일 입니다." &&
    validMsg.passMsg === "비밀번호가 일치합니다";

  const selectDomain = (event) => {
    setInputs({
      ...inputs,
      domainAdress: event.target.value,
    });
  };
  return (
    <SignUpPageUI
      changeInputs={changeInputs}
      inputs={inputs}
      register={register}
      Cancel={props.Cancel}
      isVisible={props.isVisible}
      validMsg={validMsg}
      isValid={isValid}
      selectDomain={selectDomain}
    />
  );
}
