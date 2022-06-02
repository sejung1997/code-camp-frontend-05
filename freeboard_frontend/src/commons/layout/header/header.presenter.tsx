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
          <he.subMenu>
            <he.signBtn
              id="signUp"
              onClick={props.moveRegisterPage}
              isVisible={props.isVisible}
            >
              {props.acessToken ? "My Information" : "Sign Up"}
            </he.signBtn>
            <he.signBtn
              id="signIn"
              onClick={props.moveRegisterPage}
              isVisible={props.isVisible}
            >
              {props.acessToken ? "Logout" : "Sign In"}
            </he.signBtn>
          </he.subMenu>

          <he.mainMenu>
            <he.H3L address={props.address} onClick={props.moveImagePage}>
              photo
            </he.H3L>
            <he.H3L address={props.address} onClick={props.moveListPage}>
              board
            </he.H3L>
          </he.mainMenu>
        </he.inner>
      </he.Menu>
    </div>
  );
}
