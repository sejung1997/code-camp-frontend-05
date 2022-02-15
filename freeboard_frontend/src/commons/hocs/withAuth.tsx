import { useEffect } from "react";
import { message } from "antd";
export const withAuth = (Component) => (props) => {
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.info("로그인을 먼저해주세요");
      window.history.back();
    }
  }, []);
  return <Component {...props} />;
};
