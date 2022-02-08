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

      <he.Menu>
        <he.inner>
          <he.logo src="/images/nasa3.png" onClick={props.homePage}></he.logo>

          <he.signup
            id="signUp"
            onClick={props.registerPage}
            isVisible={props.isVisible}
          >
            회원가입
          </he.signup>
          <he.signin id="signIn" onClick={props.registerPage}>
            로그인
          </he.signin>
          <he.mainMenu>
            <he.H3L address={props.address} onClick={props.imagePage}>
              사진
            </he.H3L>
            <he.H3L address={props.address} onClick={props.listPage}>
              게시판 목록
            </he.H3L>
            <he.H3 address={props.address}>게시글 보기</he.H3>
            <he.H3N address={props.address} onClick={props.newPage}>
              게시판 등록
            </he.H3N>
            <he.H3E address={props.address}>게시판 수정</he.H3E>
          </he.mainMenu>
        </he.inner>
      </he.Menu>
    </div>
  );
}
