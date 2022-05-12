import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
import Button01 from "../../../scr/commons/buttons/01";
import Input01 from "../../../scr/commons/inputs/01";

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
    mode: "onChange",
  });

  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      이메일 : <Input01 type="text" register={register("myEmail")} />
      {/* 이메일 : <input type="text" {...register("myEmail")} /> */}
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호 : <Input01 type="password" register={register("myPassword")} />
      {/* 비밀번호: <input type="password" {...register("myPassword")} /> */}
      <div>{formState.errors.myPassword?.message}</div>
      <Button01 type="submit" isValid={formState.isValid} name="로그인" />
    </form>
  );
}
