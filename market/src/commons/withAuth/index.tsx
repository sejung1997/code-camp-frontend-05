import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { message } from "antd";
import { GlobalContext } from "../../../pages/_app";
import { getAccessToken } from "../libraries/getAccessToken";
export const widthAuth = (Component) => (props) => {
  const router = useRouter();
  const { acessToken } = useContext(GlobalContext);

  useEffect(() => {
    async function aaa() {
      if (!acessToken) {
        const newAccessToken = await getAccessToken();
        if (!newAccessToken) {
          message.info("로그인을 먼저해주세요");
          router.push("/signIn");
        }
        // else {
        //   setIsLoading(false)
        // }
      }
    }
    aaa();
  }, []);
  return <Component {...props} />;
};
