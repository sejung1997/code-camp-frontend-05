/* eslint-disable no-use-before-define */
import React from "react";

import { useRouter } from "next/router";
import HeaderPageUI from "./header.presenter";

export default function HeaderPage() {
  const router = useRouter();
  const address = router.asPath;

  const l = () => {
    router.push("/boardList");
  };
  const n = () => {
    router.push("/NEW");
  };
  const r = () => {
    router.push("/signIn");
  };

  return <HeaderPageUI l={l} address={address} n={n} r={r} />;
}
