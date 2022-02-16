import * as s from "./signIn.styles";
import { IBoardSingInPageUIProps } from "./signIn.gql.types";
import { Modal } from "antd";

export default function SignUpPageUI(props: IBoardSingInPageUIProps) {
  return (
    <>
      {props.userInfo ? (
        <Modal
          visible={true}
          onOk={props.logout}
          onCancel={props.Cancel}
          width={560}
          footer={[
            <s.ButtonBack key="back" onClick={props.Cancel}>
              돌아가기
            </s.ButtonBack>,
            <s.ButtonRegister key="submit" onClick={props.logout}>
              로그아웃하기
            </s.ButtonRegister>,
          ]}
        >
          <s.Main>
            <s.topTitle>로그아웃 하시겠습니까?</s.topTitle>
          </s.Main>
        </Modal>
      ) : (
        <Modal
          visible={true}
          onOk={props.register}
          onCancel={props.Cancel}
          width={560}
          footer={[
            <s.ButtonBack key="back" onClick={props.Cancel}>
              돌아가기
            </s.ButtonBack>,
            <s.ButtonRegister
              key="submit"
              onClick={props.handleSubmit(props.onclickSubmit)}
            >
              제출하기
            </s.ButtonRegister>,
          ]}
        >
          <s.Main>
            <s.topTitle>로그인</s.topTitle>
            <s.inputs onSubmit={props.handleSubmit(props.onclickSubmit)}>
              이메일 <br />
              <s.id
                {...props.register("email")}
                // onChange={props.changeInputs("email")}
                placeholder="이메일을 입력하세요"
              ></s.id>
              <br />
              비밀번호 <br />
              <s.password
                {...props.register("password")}
                type="password"
                // onChange={props.changeInputs("password")}
                placeholder="비밀번호를 입력하세요"
              ></s.password>
            </s.inputs>
          </s.Main>
        </Modal>
      )}
    </>
  );
}
