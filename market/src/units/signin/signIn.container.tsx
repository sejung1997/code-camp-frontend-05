import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import SignInPresenter from "./signIn.presenter"

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
});
interface FormValues {
  email?: string;
  password?: string;
}
export default function SignInContainer() {

  
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",

    })
  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <>
   <SignInPresenter register={register} handleSubmit={handleSubmit} formState={formState} onclickSubmit={onclickSubmit}/>
    </>
  )
}