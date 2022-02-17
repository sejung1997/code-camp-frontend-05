import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { message } from "antd";
export function useAuth() {
  const router = useRouter();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      message.info("로그인을 먼저해주세요");
      router.push("/lecture/2304-login-check");
    } else {
      setIsloading(false);
    }
  }, []);
  return {
    isloading,
  };
}
