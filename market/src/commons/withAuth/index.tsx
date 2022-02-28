import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { message } from "antd";
import { GlobalContext } from "../../../pages/_app";
export const widthAuth = (Component) => (props) => {
  const router = useRouter();
  const { acessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!acessToken) {
      message.info("로그인을 먼저해주세요");
      router.push("/signIn");
    }
  }, []);
  return <Component {...props} />;
};
