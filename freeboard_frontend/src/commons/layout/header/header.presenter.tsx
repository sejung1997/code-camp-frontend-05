import * as he from "./header.styles";
import SignUpPage from "../../../boards/signup/signup.container";

import { IHeaerPageUIProps } from "./header.types";
import SignInPage from "../../../boards/signIn/signIn.container";

export default function HeaderPageUI(props: IHeaerPageUIProps) {
  return (
    <div>
      {props.isVisible.signUp && (
        <SignUpPage
          isVisible={props.isVisible}
          Cancel={props.Cancel}
          userData={props.userData}
        />
      )}
      {props.isVisible.signIn && (
        <SignInPage
          isVisible={props.isVisible}
          Cancel={props.Cancel}
          setUserData={props.setUserData}
        />
      )}

      <he.Menu>
        <he.inner>
          <he.logo
            src="/images/nasa3.png"
            onClick={props.moveHomePage}
          ></he.logo>

          <he.signup
            id="signUp"
            onClick={props.moveRegisterPage}
            isVisible={props.isVisible}
          >
            {props.userData.email ? "회원정보" : "회원가입"}
          </he.signup>
          <he.signin
            id="signIn"
            onClick={props.moveRegisterPage}
            isVisible={props.isVisible}
          >
            {props.userData.email ? "로그아웃" : "로그인"}
          </he.signin>
          <he.mainMenu>
            <he.H3L address={props.address} onClick={props.moveFirePage}>
              파이어 베이스
            </he.H3L>
            <he.H3L address={props.address} onClick={props.moveImagePage}>
              사진
            </he.H3L>
            <he.H3L address={props.address} onClick={props.moveListPage}>
              게시판 목록
            </he.H3L>
          </he.mainMenu>
        </he.inner>
      </he.Menu>
    </div>
  );
}
