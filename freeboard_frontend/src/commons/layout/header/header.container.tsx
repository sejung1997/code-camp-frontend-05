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

  const l = () => {
    router.push("/boardList");
  };
  const n = () => {
    router.push("/NEW");
  };
  const r = (event) => {
    setIsVisible({ ...isVisible, [event.target.id]: true });
    // router.push("/signIn");
    console.log(isVisible);
  };
  const Cancel = () => {
    setIsVisible({ signUp: false, signIn: false });
  };
  const h = () => {
    router.push("/boardList");
  };

  return (
    <HeaderPageUI
      l={l}
      address={address}
      n={n}
      r={r}
      isVisible={isVisible}
      Cancel={Cancel}
      h={h}
      // loginVisible={loginVisible}
    />
  );
}
