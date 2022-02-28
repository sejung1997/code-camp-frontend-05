import {
  LOGIN_USER,
  IBoardSignInPageProps,
  LOGOUT_USER,
  FETCH_USER_LOGGED_IN,
} from "./signIn.gql.types";
import { useMutation, useApolloClient } from "@apollo/client";
import SignUpPageUI from "./signIn.presenter";
import { ChangeEvent, useContext, useState } from "react";
import { message, Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../commons/types/generated/types";
import { GlobalContext } from "../../../pages/_app";
import { useForm } from "react-hook-form";

// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import "firebaseui/dist/firebaseui.css";

// import * as firebaseui from "firebaseui";
export default function SignUpPage(props: IBoardSignInPageProps) {
  const { register, handleSubmit } = useForm();

  const client = useApolloClient();
  // const [inputs, setInputs] = useState({
  //   email: "",
  //   password: "",
  //   isValid: false,
  // });

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const [logoutUser] = useMutation(LOGOUT_USER);

  const { setAcessToken, acessToken, setUserInfo, userInfo } =
    useContext(GlobalContext);
  // const changeInputs = (id) => (event: ChangeEvent<HTMLInputElement>) => {
  //   setInputs({
  //     ...inputs,
  //     [id]: event.target.value,
  //   });
  // };

  // const auth = getAuth();

  const onclickSubmit = async (data) => {
    console.log(data);
    try {
      if (
        !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
          data.email
        )
      )
        return message.info("이메일을 확인해주세요");
      // if (!/([0-9]+[a-z]+[A-Z]+){8,12}/g.test(data.password))
      //   return message.info("비밀번호는 8-12자리 입니다");
      else {
        const token = await loginUser({
          variables: {
            email: String(data?.email),
            password: String(data?.password),
          },
        });
        const accessToken = token.data?.loginUser?.accessToken || "";
        if (setAcessToken) setAcessToken(accessToken);
        localStorage.setItem("accessToken", accessToken);

        const resultUserInfo = await client.query({
          query: FETCH_USER_LOGGED_IN,
          // headers: { Authorization: `Bearer ${acessToken}` },

          // app에서 세팅되어서 없어도 됨
        });
        const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

        if (setUserInfo) setUserInfo(userInfo);

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        props.Cancel();
      }
    } catch (error) {
      // message.info(error.message);
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const logout = () => {
    try {
      logoutUser();

      message.info("로그아웃했습니다");
      window.location.reload();
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
  console.log(`dsdfsdffdssfdfds${userInfo}`);
  return (
    <SignUpPageUI
      // changeInputs={changeInputs}
      // inputs={inputs}
      Cancel={props.Cancel}
      isVisible={props.isVisible}
      acessToken={acessToken}
      logout={logout}
      register={register}
      handleSubmit={handleSubmit}
      onclickSubmit={onclickSubmit}
      userInfo={userInfo}
    />
  );
}
