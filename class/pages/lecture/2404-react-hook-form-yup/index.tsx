import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid: boolean;
}
const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;
const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});

interface FormValues {
  myEmail?: string;
  myPassword?: string;
}
export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      이메일 : <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <input type="text" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      {formState.isValid}
      <MyButton isValid={formState.isValid}>로그인</MyButton>
      {/* 버튼 클릭하면 onSubmit함수가  실행됨  type="button"이면 실행안됨* /}
      {/* <button type="button" onclick={}>나만의 버튼</button> */}
    </form>
  );
}
