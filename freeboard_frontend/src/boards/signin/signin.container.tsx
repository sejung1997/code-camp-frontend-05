import { LOGIN_USER, IBoardSignInPageProps } from "./signIn.gql.types";
import { useMutation } from "@apollo/client";
import SignUpPageUI from "./signIn.presenter";
import { ChangeEvent, useState } from "react";
import { message } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/types/generated/types";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebaseui/dist/firebaseui.css";

// import * as firebaseui from "firebaseui";
export default function SignUpPage(props: IBoardSignInPageProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    isValid: false,
  });

  // const [loginUser] = useMutation<
  //   Pick<IMutation, "loginUser">,
  //   IMutationLoginUserArgs
  // >(LOGIN_USER);

  const changeInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  if (inputs.email && inputs.password) inputs.isValid = true;
  if (!inputs.email || !inputs.password) inputs.isValid = false;
  const auth = getAuth();

  const register = async () => {
    console.log(inputs);
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
          // Signed in
          // ...
          message.info("로그인이 완료되었습니다");
          const user = auth.currentUser;

          if (user !== null) {
            props.setUserData({
              creationTime: user.metadata.creationTime,
              lastSignInTime: user.metadata.lastSignInTime,
              email: user.email,
              emailVerified: user.emailVerified,
            });
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          message.info(errorCode);
          message.info(errorMessage);
        });
      // console.log(inputs);
      // await loginUser({
      //   variables: {
      //     email: inputs.email,
      //     password: inputs.password,
      //   },
      // });
      props.Cancel();
    } catch (error) {
      message.info(error.message);
    }
  };

  console.log();

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
    />
  );
}
