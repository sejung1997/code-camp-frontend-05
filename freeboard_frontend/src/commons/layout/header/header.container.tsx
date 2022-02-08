/* eslint-disable no-use-before-define */
import React, { useState } from "react";

import { useRouter } from "next/router";
import HeaderPageUI from "./header.presenter";

export default function HeaderPage() {
  const [isVisible, setIsVisible] = useState({
    signUp: false,
    signIn: false,
  });
  const router = useRouter();
  const address = router.asPath;

  const listPage = () => {
    router.push("/boardList");
  };
  const newPage = () => {
    router.push("/NEW");
  };
  const registerPage = (event) => {
    setIsVisible({ ...isVisible, [event.target.id]: true });
    // router.push("/signIn");
    console.log(isVisible);
  };
  const Cancel = () => {
    setIsVisible({ signUp: false, signIn: false });
  };
  const homePage = () => {
    router.push("/");
  };
  const imagePage = () => {
    router.push("/ImageSearch");
  };
  return (
    <HeaderPageUI
      imagePage={imagePage}
      listPage={listPage}
      address={address}
      newPage={newPage}
      registerPage={registerPage}
      isVisible={isVisible}
      Cancel={Cancel}
      homePage={homePage}
      // loginVisible={loginVisible}
    />
  );
}
