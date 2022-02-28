import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_USER, FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./signIn.gql";
import { FormValues } from "./signIn.types";
import SignInPresenter from "./signIn.presenter";
import { useMutation, useApolloClient } from "@apollo/client";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { message, Modal } from "antd";
const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요")
    .max(15, "비밀번호는 최대 15자리 입니다.")
    .required("비밀번호는 필수 입력 사항입니다"),
});

export default function SignInContainer() {
  const client = useApolloClient();
  const router = useRouter();
  const { setAcessToken, setUserInfo, userInfo, acessToken } =
    useContext(GlobalContext);
  const [loginUser] = useMutation(LOGIN_USER);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onclickSubmit = async (data: FormValues) => {
    try {
      await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      })
        .then((res) => {
          const token = res.data?.loginUser?.accessToken || "";
          if (setAcessToken) setAcessToken(token);
        })
        .then(() => {
          setInfomation();
        });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const setInfomation = async () => {
    try {
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
      });
      const Info = resultUserInfo.data?.fetchUserLoggedIn;

      if (setUserInfo) setUserInfo(Info);
      localStorage.setItem("userInfo", JSON.stringify(Info));

      message.info(`${Info.name}님 환영합니다`);
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // useEffect(() => {
  //   if (acessToken) setInfomation();
  // }, [setAcessToken]);

  const logout = () => {
    try {
      logoutUser();

      localStorage.removeItem("accessToken");
      localStorage.removeItem("userInfo");

      message.info("로그아웃했습니다");
      router.push("/");
    } catch (error) {
      message.info(error.message);
    }
  };
  return (
    <>
      <SignInPresenter
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        onclickSubmit={onclickSubmit}
        logout={logout}
        userInfo={userInfo}
      />
    </>
  );
}
