import * as s from "./signIn.styles";
import { IBoardSingInPageUIProps } from "./signIn.gql.types";
import { Modal } from "antd";

export default function SignUpPageUI(props: IBoardSingInPageUIProps) {
  return (
    <>
      <head>
        <script src=""></script>
      </head>
      <Modal
        visible={true}
        onOk={props.register}
        onCancel={props.Cancel}
        width={560}
        footer={[
          <s.ButtonBack key="back" onClick={props.Cancel}>
            돌아가기
          </s.ButtonBack>,
          <s.ButtonRegister key="submit" onClick={props.register}>
            제출하기
          </s.ButtonRegister>,
        ]}
      >
        <s.Main>
          <s.topTitle>로그인</s.topTitle>
          <s.inputs>
            이메일 <br />
            <s.id
              id="email"
              onChange={props.changeInputs}
              placeholder="이메일을 입력하세요"
            ></s.id>
            <br />
            비밀번호 <br />
            <s.password
              id="password"
              type="password"
              onChange={props.changeInputs}
              placeholder="비밀번호를 입력하세요"
            ></s.password>
          </s.inputs>
        </s.Main>
      </Modal>
    </>
  );
}
