import * as s from "./signup.styles";
import { IBoardSingUpPageUIProps } from "./signup.gql.types";
import { message, Modal } from "antd";

export default function SignUpPageUI(props: IBoardSingUpPageUIProps) {
  return (
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
          onClick={props.register}
          disabled={!props.isValid}
          isValid={props.isValid}
        >
          제출하기
        </s.ButtonRegister>,
      ]}
    >
      <s.Main>
        <s.topTitle>회원가입</s.topTitle>
        <s.inputs>
          이메일 <br />
          <s.id
            id="email"
            onChange={props.changeInputs}
            placeholder="이메일을 입력하세요"
          ></s.id>
          <s.inputdomain
            readOnly={
              props.inputs.inpuinAdress !== "직접입력" &&
              props.inputs.domainAdress !== ""
            }
          ></s.inputdomain>
          <s.domainAddress id="domainAdress" onChange={props.selectDomain}>
            <option>직접입력</option>
            <option>naver.com</option>
            <option>gmail.com</option>
            <option>hanmail.net</option>
            <option>nate.com</option>
          </s.domainAddress>
          <s.validBtn onClick={props.authority}>인증번호 전송</s.validBtn>
          <s.validId>{props.validMsg.emailMsg}</s.validId>
          비밀번호 <br />
          <s.password
            id="password"
            type="password"
            onChange={props.changeInputs}
            placeholder="비밀번호를 입력하세요"
          ></s.password>
          <s.password
            id="password2"
            type="password"
            onChange={props.changeInputs}
            placeholder="비밀번호를 다시 입력하세요"
          ></s.password>
          <s.validPs>{props.validMsg.passMsg}</s.validPs>
          이름 <br />
          <s.name
            id="name"
            onChange={props.changeInputs}
            placeholder="이름을 입력하세요"
          ></s.name>
          <br />
          전화번호 <br />
          <s.number
            placeholder="번호를 입력하세요"
            defaultValue={"010"}
          ></s.number>
        </s.inputs>
      </s.Main>
    </Modal>
  );
}
