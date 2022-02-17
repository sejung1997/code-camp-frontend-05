import {useForm} from "react-hook-form"
import Button01 from "../../commons/buttons/01"
import Input01 from "../../commons/inputs/01"
import Inputs from "../../commons/inputs/01"
import * as SI from "./signIn.styles"

export default function SignInPresenter(props) {

  return (

    <>
    <SI.Main>
      <SI.label>로그인</SI.label>
      <SI.InputWrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
        <Input01 type="text" register={props.register("email")}/>
        <div>{props.formState.errors.email?.message}</div>

        <Input01 type="password" register={props.register("password")}/>
        <div>{props.formState.errors.password?.message}</div>

        <Button01  name="로그인"/>
      </SI.InputWrapper>
    </SI.Main>
      
    </>
  )
}