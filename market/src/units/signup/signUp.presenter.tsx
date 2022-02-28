import Button01 from "../../commons/button01";
import Input01 from "../../commons/inputs/input01";
import * as SI from "./signUp.styles";
import Head from "next/head";
import PurchaseItem from "../../commons/purchaseItem/index";
export default function SignInPresenter(props) {
  return (
    <>
      {props.userInfo.name ? (
        <SI.Main>
          <SI.label>이메일</SI.label>
          <div>{props.userInfo.email}</div>

          <SI.label>이름</SI.label>
          <div>{props.userInfo.name}</div>

          <SI.label>가입 일자</SI.label>
          <div>{props.userInfo.createdAt}</div>
          <SI.label>포인트</SI.label>
          <div>{props.point}원</div>
          <PurchaseItem />
        </SI.Main>
      ) : (
        <SI.Main>
          <SI.label>회원가입</SI.label>
          <SI.InputWrapper onSubmit={props.handleSubmit(props.onclickSubmit)}>
            <SI.label>이메일</SI.label>
            <Input01 type="text" register={props.register("email")} />
            <SI.ErrMsg>{props.formState.errors.email?.message}</SI.ErrMsg>

            <SI.label>비밀번호</SI.label>
            <Input01 type="password" register={props.register("password")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>

            <Input01 type="password" register={props.register("password2")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>

            <SI.label>이름</SI.label>
            <Input01 type="password" register={props.register("name")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>

            <SI.label>전화번호</SI.label>
            <Input01 type="password" register={props.register("number")} />
            <SI.ErrMsg>{props.formState.errors.password?.message}</SI.ErrMsg>
            <Button01 name="회원가입" />
          </SI.InputWrapper>
        </SI.Main>
      )}
    </>
  );
}
