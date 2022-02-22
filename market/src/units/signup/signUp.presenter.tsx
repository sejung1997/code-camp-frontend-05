import { useForm } from "react-hook-form";
import Button01 from "../../commons/button01";
import Input01 from "../../commons/inputs/input01";
import * as SI from "./signUp.styles";
import { Modal } from "antd";
import Head from "next/head";

export default function SignInPresenter(props) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {props.isModalVisible && (
        <Modal
          title="충전하기"
          visible={true}
          onOk={props.handleOk}
          onCancel={props.onModal}
          footer={[
            <SI.PayBtn key="back" onClick={props.onModal}>
              취소하기
            </SI.PayBtn>,
            <SI.PayBtn key="submit" onClick={props.handleOk}>
              Submit
            </SI.PayBtn>,
          ]}
        >
          <select onChange={props.setPrice}>
            <option>500</option>
            <option>1000</option>
            <option>2000</option>
            <option>5000</option>
          </select>
        </Modal>
      )}

      {props.userInfo.name ? (
        <SI.Main>
          <SI.label>이메일</SI.label>
          <div>{props.userInfo.email}</div>

          <SI.label>이름</SI.label>
          <div>{props.userInfo.name}</div>

          <SI.label>가입 일자</SI.label>
          <div>{props.userInfo.createdAt}</div>
          <SI.label>포인트</SI.label>
          <div>{props.userInfo.createdAt}</div>
          <SI.PayBtn onClick={props.onModal}>충전하기</SI.PayBtn>
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
            <Button01 name="로그인" />
          </SI.InputWrapper>
        </SI.Main>
      )}
    </>
  );
}
