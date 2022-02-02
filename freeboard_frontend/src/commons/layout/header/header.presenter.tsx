import * as he from "./header.styles";
import SignUpPage from "../../../boards/signup/signup.container";

import { IHeaerPageUIProps } from "./header.types";
import SignInPage from "../../../boards/signIn/signIn.container";

export default function HeaderPageUI(props: IHeaerPageUIProps) {
  return (
    <div>
      {props.isVisible.signUp && (
        <SignUpPage isVisible={props.isVisible} Cancel={props.Cancel} />
      )}
      {props.isVisible.signIn && (
        <SignInPage isVisible={props.isVisible} Cancel={props.Cancel} />
      )}
      <he.H2> 자유 게시판</he.H2>
      <he.Menu>
        <he.logo src="/images/nasa3.png" onClick={props.h}></he.logo>
        <he.H3L address={props.address} onClick={props.l}>
          게시판 목록
        </he.H3L>

        <he.H3 address={props.address}>게시글 보기</he.H3>

        <he.H3N address={props.address} onClick={props.n}>
          게시판 등록
        </he.H3N>

        <he.H3E address={props.address}>게시판 수정</he.H3E>

        <he.H3M id="signUp" onClick={props.r} isVisible={props.isVisible}>
          회원가입
        </he.H3M>
        <he.H3log id="signIn" onClick={props.r}>
          로그인
        </he.H3log>
      </he.Menu>
    </div>
  );
}
