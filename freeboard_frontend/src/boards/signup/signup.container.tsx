import { CREATE_USER, IBoardSignUpPageProps } from "./signup.gql.types";
import { useMutation, useQuery } from "@apollo/client";
import SignUpPageUI from "./signup.presenter";
import { ChangeEvent, useContext, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../commons/types/generated/types";
import { GlobalContext } from "../../../pages/_app";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password1: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  password2: yup

    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});
export default function SignUpPage(props: IBoardSignUpPageProps) {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [domainAdress, setDomainAdress] = useState("");

  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const changeDomain = (event) => {
    setDomainAdress(event.target.value);
    if (event.target.value === "직접입력") setDomainAdress("");
  };

  const { userInfo } = useContext(GlobalContext);

  // const changeInputs =
  //   (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
  //     setInputs({
  //       ...inputs,
  //       [id]: event.target.value,
  //     });
  //     if (event.target.value === "직접입력") {
  //       setInputs({
  //         ...inputs,
  //         domainAdress: "",
  //       });
  //     }
  //     if (event.target.id === "password2") {
  //       setValidMsg("비밀번호가 일치하지 않습니다");
  //       if (inputs.password === inputs.password2)
  //         setValidMsg("비밀번호가 일치합니다");
  //     }
  //     console.log(inputs);
  //   };

  const onclickSubmit = async (data) => {
    console.log(data);
    try {
      if (!/^[a-zA-Z1-9]([-_\.]?[0-9a-zA-Z])*/.test(data.email))
        message.info("유효하지않은 이메일입니다");
      // else if (
      //   // (?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^*+-_])
      //   !/^[a-z][A-Z][!@#$%^*+-_].{8,}&/.test(data.password)
      // )
      //   message.info("비밀번호는 대/소문자 특수기호가 포함되어야 합니다");
      else {
        await createUser({
          variables: {
            createUserInput: {
              email: `${data.email}@${domainAdress}`,
              password: String(data.password),
              name: data.name,
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

  return (
    <SignUpPageUI
      Cancel={props.Cancel}
      isVisible={props.isVisible}
      userInfo={userInfo}
      register={register}
      handleSubmit={handleSubmit}
      onclickSubmit={onclickSubmit}
      domainAdress={domainAdress}
      changeDomain={changeDomain}
      formState={formState}
    />
  );
}
