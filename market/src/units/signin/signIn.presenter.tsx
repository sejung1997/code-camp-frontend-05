import Button01 from "../../commons/button01/";
import Input01 from "../../commons/inputs/input01";
import * as SI from "./signIn.styles";

export default function SignInPresenter(props) {
  return (
    <>
      {props.acessToken ? (
        <SI.Main>
          <button name="로그아웃" onClick={props.logout}>
            로그아웃 하기
          </button>
        </SI.Main>
      ) : (
        <SI.Main>
          <SI.label>로그인</SI.label>
          <SI.InputWrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
            <Input01 type="text" register={props.register("email")} />
            <div>{props.formState.errors.email?.message}</div>

            <Input01 type="password" register={props.register("password")} />
            <div>{props.formState.errors.password?.message}</div>

            <Button01 name="로그인" />
          </SI.InputWrapper>
        </SI.Main>
      )}
    </>
  );
}
