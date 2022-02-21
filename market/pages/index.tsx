import { useContext } from "react";
import { GlobalContext } from "./_app";

export default function Home() {
  const { userInfo } = useContext(GlobalContext);
  return <></>;
}
