import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
export function useMovePage() {
  const router = useRouter();
  const movePage = (url) => () => {
    router.push(`/${url}`);
  };

  return movePage;
}
// export const movePage = (url) => {
//   Router.push(`/${url}`);
// };
