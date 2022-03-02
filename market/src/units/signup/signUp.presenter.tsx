import Button01 from "../../commons/button01";
import Input01 from "../../commons/inputs/input01";
import * as SI from "./signUp.styles";
import Head from "next/head";
import PurchaseItem from "../../commons/purchaseItem/index";
export default function SignInPresenter(props) {
  return (
    <>
      {props.acessToken ? (
        <SI.Main>
          <SI.label>마이페이지</SI.label>

          <SI.label>이메일</SI.label>
          <div>{props.data?.fetchUserLoggedIn?.email}</div>

          <SI.label>이름</SI.label>
          <div>{props.data?.fetchUserLoggedIn?.name}</div>

          <SI.label>가입 일자</SI.label>
          <div>{props.data?.fetchUserLoggedIn?.createdAt.slice(0, 10)}</div>
          <SI.label>구매한 상품</SI.label>
          <div>
            {props.soldData?.fetchUseditemsIBought?.map((x, INDEX) => (
              <div key={INDEX}>
                <div>상품명: {x.name}</div>
                <div>가격 : {x.price}원</div>
                <div>내용 : {x.contents}</div>
              </div>
            ))}
          </div>

          <SI.label>판매한 상품</SI.label>
          <div>
            {props.buyData?.fetchUseditemsISold?.map((x, INDEX) => (
              <div key={INDEX}>
                <div>상품명: {x.name}</div>
                <div>가격 : {x.price}원</div>
                <div>내용 : {x.contents}</div>
              </div>
            ))}
          </div>
          <SI.label>포인트</SI.label>
          <div>{props.data?.fetchUserLoggedIn?.userPoint.amount}원</div>
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
