/* eslint-disable no-use-before-define */
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import HeaderPageUI from "./header.presenter";
import { GlobalContext } from "../../../../pages/_app";

export default function HeaderPage() {
  const [isVisible, setIsVisible] = useState({
    signUp: false,
    signIn: false,
  });
  const [userData, setUserData] = useState({
    creationTime: "",
    lastSignInTime: "",
    email: "",
    emailVerified: false,
  });
  const { acessToken } = useContext(GlobalContext);

  const router = useRouter();
  const address = router.asPath;

  const moveListPage = () => {
    router.push("/boardList");
  };

  const moveRegisterPage = (event) => {
    setIsVisible({ ...isVisible, [event.target.id]: true });
    console.log(isVisible);
    // router.push("/signIn");
  };
  const Cancel = () => {
    setIsVisible({ signUp: false, signIn: false });
    console.log(isVisible);
  };
  const moveHomePage = () => {
    router.push("/");
  };
  const moveImagePage = () => {
    router.push("/ImageSearch");
  };
  const moveFirePage = () => {
    router.push("./firebase");
  };
  return (
    <HeaderPageUI
      moveImagePage={moveImagePage}
      moveListPage={moveListPage}
      moveRegisterPage={moveRegisterPage}
      address={address}
      isVisible={isVisible}
      Cancel={Cancel}
      userData={userData}
      setUserData={setUserData}
      moveHomePage={moveHomePage}
      moveFirePage={moveFirePage}
      // loginVisible={loginVisible}
      acessToken={acessToken}
    />
  );
}
