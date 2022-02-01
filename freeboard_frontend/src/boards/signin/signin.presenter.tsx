import * as s from "./signin.styles";

export default function SignInPageUI(props) {
  return (
    <s.Main>
      <s.topTitle>회원가입</s.topTitle>
      <s.inputs>
        이메일 <br />
        <s.id id="email" onChange={props.changeInputs}>
          {props.inputs.email}
        </s.id>
        <s.validBtn></s.validBtn>
        <s.validId></s.validId>
        비밀번호 <br />
        <s.password id="password" onChange={props.changeInputs}>
          {props.inputs.password}
        </s.password>
        <s.password></s.password>
        <s.validPs></s.validPs>
        이름 <br />
        <s.name id="name" onChange={props.changeInputs}>
          {props.inputs.name}
        </s.name>
        전화번호 <br />
        <s.number></s.number>
      </s.inputs>
      <s.registerBtn onClick={props.register}>회원가입하기</s.registerBtn>
    </s.Main>
  );
}
