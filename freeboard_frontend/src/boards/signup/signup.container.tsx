import {
  CREATE_USER,
  FETCH_USER_LOGGED_IN,
  IBoardSignUpPageProps,
} from "./signup.gql.types";
import { useMutation, useQuery } from "@apollo/client";
import SignUpPageUI from "./signup.presenter";
import { ChangeEvent, useContext, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/types/generated/types";
import { GlobalContext } from "../../../pages/_app";

export default function SignUpPage(props: IBoardSignUpPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    domainAdress: "",
  });
  const [validMsg, setValidMsg] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const { acessToken } = useContext(GlobalContext);

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

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  console.log();
  const register = async () => {
    try {
      // const auth = getAuth();
      // createUserWithEmailAndPassword(
      //   auth,
      //   `${inputs.email}@${inputs.domainAdress}`,
      //   inputs.password
      // )
      //   .then((userCredential) => {
      //     // Signed in
      //     const user = userCredential.user;
      //     // ...
      //     message.info("회원가입이 완료되었습니다");
      //   })

      // .catch((error) => {
      //   const errorCode = error.code;
      //   message.info(errorCode);
      //   const errorMessage = error.message;
      //   message.info(errorMessage);

      //   // ..
      // });
      // console.log(inputs);
      if (!/^[a-zA-Z1-9]([-_\.]?[0-9a-zA-Z])*/.test(inputs.email))
        message.info("유효하지않은 이메일입니다");
      else if (
        // (?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^*+-_])
        !/^[a-z][A-Z][!@#$%^*+-_].{8,}&/.test(inputs.password)
      )
        message.info("비밀번호는 대/소문자 특수기호가 포함되어야 합니다");
      else {
        await createUser({
          variables: {
            createUserInput: {
              email: `${inputs.email}@${inputs.domainAdress}`,
              password: inputs.password,
              name: inputs.name,
            },
          },
        });
        message.info("회원가입이 완료됐습니다.");
        props.Cancel();
      }
    } catch (error) {
      message.info(error.message);
    }
  };

  // const selectDomain = (event) => {
  //    if (event.target.value === "직접입력") {
  //    setInputs({
  //        ...inputs,
  //        domainAdress: "",
  //      });

  //   setInputs({
  //     ...inputs,
  //     domainAdress: event.target.value,
  //   });
  // };
  return (
    <SignUpPageUI
      changeInputs={changeInputs}
      inputs={inputs}
      register={register}
      Cancel={props.Cancel}
      isVisible={props.isVisible}
      validMsg={validMsg}
      acessToken={acessToken}
      data={data?.fetchUserLoggedIn}
    />
  );
}
