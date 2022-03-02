import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GlobalContext } from "../../../pages/_app";
import SignUpPresenter from "./signUp.presenter";
import { useContext, useState } from "react";
import {
  CREATE_USER,
  FETCH_USER_LOGGED_IN,
  FETCH_USED_ITEM_ISOLD,
  FETCH_USED_ITEM_IBOUGHT,
} from "./signUp.types";
import { useMutation, useQuery } from "@apollo/client";
import { message, Modal } from "antd";
import { Router, useRouter } from "next/router";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  password2: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
  name: yup
    .string()

    .required("이름은 필수 입력 사항입니다"),
  number: yup
    .number()

    .required("전화번호는 필수 입력 사항입니다"),
});
interface FormValues {
  email: string;
  password: string;
  name: string;
}
export default function SignInContainer() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: soldData } = useQuery(FETCH_USED_ITEM_ISOLD, {
    variables: { page: 1, search: "" },
  });
  const { data: buyData } = useQuery(FETCH_USED_ITEM_IBOUGHT, {
    variables: { page: 1, search: "" },
  });
  const { userInfo, point, acessToken } = useContext(GlobalContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onclickSubmit = async (data: FormValues) => {
    try {
      const userName = await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(userName?.data.createUser.name);

      message.info("회원가입에 성공했습니다");

      router.push("/signIn");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  console.log(soldData);
  console.log(buyData);

  return (
    <>
      <SignUpPresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onclickSubmit={onclickSubmit}
        point={point}
        acessToken={acessToken}
        userInfo={userInfo}
        data={data}
        soldData={soldData}
        buyData={buyData}
      />
    </>
  );
}
