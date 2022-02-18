import { useRouter } from "next/router";
import { useEffect, ComponentType } from "react";
import { message } from "antd";
// prettier-ignore
export const widthAuth = (Component: ComponentType) => <P extends {}>(props: P) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.info("로그인을 먼저해주세요");
      router.push("/lecture/2304-login-check");
    }
  }, []);
  return <Component {...props} />;
};
