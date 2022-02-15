import {
  LOGIN_USER,
  IBoardSignInPageProps,
  LOGOUT_USER,
} from "./signIn.gql.types";
import { useMutation } from "@apollo/client";
import SignUpPageUI from "./signIn.presenter";
import { ChangeEvent, useContext, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/types/generated/types";
import { GlobalContext } from "../../../pages/_app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebaseui/dist/firebaseui.css";

// import * as firebaseui from "firebaseui";
export default function SignUpPage(props: IBoardSignInPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    isValid: false,
  });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { setAcessToken, acessToken } = useContext(GlobalContext);
  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  // const auth = getAuth();

  const register = async () => {
    try {
      // signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      //   .then((userCredential) => {
      //     // Signed in
      //     // ...
      //     message.info("로그인이 완료되었습니다");
      //     const user = auth.currentUser;

      //     if (user !== null) {
      //       props.setUserData({
      //         creationTime: user.metadata.creationTime,
      //         lastSignInTime: user.metadata.lastSignInTime,
      //         email: user.email,
      //         emailVerified: user.emailVerified,
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     message.info(errorCode);
      //     message.info(errorMessage);
      //   });
      if (
        !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
          inputs.email
        )
      )
        return message.info("이메일을 확인해주세요");
      if (!/([0-9]+[a-z]+[A-Z]+){8,12}/.test(inputs.password))
        return message.info("비밀번호는 8-12자리 입니다");
      else {
        const token = await loginUser({
          variables: {
            email: inputs.email,
            password: inputs.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken || "";
        if (accessToken) {
          setAcessToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        }
        props.Cancel();
      }
    } catch (error) {
      message.info(error.message);
    }
  };

  const logout = async () => {
    try {
      const b = await logoutUser();
    } catch (error) {
      message.info(error.message);
    }
  };
  // const ui = new firebaseui.auth.AuthUI(firebase.auth());
  // ui.start("#firebaseui-auth-container", {
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //       signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
  //     },
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   ],
  //   // Other config options...
  // });

  return (
    <SignUpPageUI
      changeInputs={changeInputs}
      inputs={inputs}
      register={register}
      Cancel={props.Cancel}
      isVisible={props.isVisible}
      acessToken={acessToken}
      logout={logout}
    />
  );
}
