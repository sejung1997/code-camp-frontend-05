import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/board" | "/market" | "/mypage";

// interface AAA {
//   name: string
//   age: number
// }
// interface AAA {
//   schoo: string
// }
// interface 로 중첩 선언하면  합쳐질 수 있다.
// type은 중첩선언 불가
export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");
  const moveToPage = (page: IPage) => () => {
    router.push(page);
    setVisitedPage(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}
