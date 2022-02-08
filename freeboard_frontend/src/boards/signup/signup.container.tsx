import { CREATE_USER, IBoardSignUpPageProps } from "./signup.gql.types";
import { useMutation } from "@apollo/client";
import SignUpPageUI from "./signup.presenter";
import { ChangeEvent, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/types/generated/types";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpPage(props: IBoardSignUpPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    domainAdress: "",
  });
  const [validMsg, setValidMsg] = useState("");
  // const [createUser] = useMutation<
  //   Pick<IMutation, "createUser">,
  //   IMutationCreateUserArgs
  // >(CREATE_USER);

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (event.target.id === "password2") {
      setValidMsg("비밀번호가 일치하지 않습니다");
      if (inputs.password === inputs.password2)
        setValidMsg("비밀번호가 일치합니다");
    }
  };

  const register = async () => {
    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        `${inputs.email}@${inputs.domainAdress}`,
        inputs.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          message.info("회원가입이 완료되었습니다");
        })
        .catch((error) => {
          const errorCode = error.code;
          message.info(errorCode);
          const errorMessage = error.message;
          message.info(errorMessage);

          // ..
        });
      // console.log(inputs);
      // await createUser({
      //   variables: {
      //     createUserInput: {
      //       email: inputs.email,
      //       password: inputs.password,
      //       name: inputs.name,
      //     },
      //   },
      // });
      props.Cancel();
    } catch (error) {
      message.info(error.message);
    }
  };

  const selectDomain = (event) => {
    // if (event.target.value === "직접입력") {
    //   setInputs({
    //     ...inputs,
    //     domainAdress: "",
    //   });

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
      selectDomain={selectDomain}
    />
  );
}
