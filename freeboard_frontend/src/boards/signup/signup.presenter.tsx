import * as s from "./signup.styles";
import { IBoardSingUpPageUIProps } from "./signup.gql.types";
import { Modal } from "antd";

export default function SignUpPageUI(props: IBoardSingUpPageUIProps) {
  return (
    <>
      {props.userInfo ? (
        <Modal
          visible={true}
          onCancel={props.Cancel}
          width={560}
          footer={[
            <s.ButtonBack key="back" onClick={props.Cancel}>
              돌아가기
            </s.ButtonBack>,
          ]}
        >
          <s.Main>
            <s.topTitle>회원정보</s.topTitle>
            <form>
              이메일 <br />
              <s.email>{JSON.parse(props.userInfo).email}</s.email>
              이름 <br />
              <s.lastSignTime>{JSON.parse(props.userInfo).name}</s.lastSignTime>
              가입 날짜 <br />
              <s.creationTime>
                {JSON.parse(props.userInfo).createdAt}
              </s.creationTime>
            </form>
          </s.Main>
        </Modal>
      ) : (
        <Modal
          visible={true}
          onOk={props.submit}
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
            <s.topTitle>회원가입</s.topTitle>

            <s.inputs onSubmit={props.handleSubmit(props.onclickSubmit)}>
              이메일 <br />
              <s.id
                {...props.register("email")}
                // onChange={props.changeInputs("email")}
                placeholder="이메일을 입력하세요"
              ></s.id>
              <div>{props.formState.errors.email?.message}</div>
              {props.domainAdress === "" ? (
                <s.inputdomain1
                  defaultValue=""
                  placeholder="직접입력해주세요"
                ></s.inputdomain1>
              ) : (
                <s.inputdomain value={`@${props.domainAdress}`}></s.inputdomain>
              )}
              <s.domainAddress onChange={props.changeDomain}>
                <option>직접입력</option>
                <option>naver.com</option>
                <option>gmail.com</option>
                <option>hanmail.net</option>
                <option>nate.com</option>
              </s.domainAddress>
              {/* <s.validBtn onClick={props.authority}>인증번호 전송</s.validBtn> */}
              {/* <s.validId>{props.validMsg.emailMsg}</s.validId> */}
              비밀번호 <br />
              <s.password
                type="password"
                {...props.register("password1")}
                // onChange={props.changeInputs("password")}
                placeholder="비밀번호를 입력하세요"
              ></s.password>
              <div>{props.formState.errors.password1?.message}</div>
              <s.password
                type="password"
                {...props.register("password2")}
                // onChange={props.changeInputs("password2")}
                placeholder="비밀번호를 다시 입력하세요"
              ></s.password>
              <div>{props.formState.errors.password2?.message}</div>
              {/* <s.validPs isValid={props.validMsg === "비밀번호가 일치합니다"}> */}
              {/* {props.validMsg} */}
              {/* </s.validPs> */}
              <br />
              이름 <br />
              <s.name
                {...props.register("name")}
                // onChange={props.changeInputs("name")}
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
      )}
    </>
  );
}
