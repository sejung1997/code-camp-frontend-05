import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

export default function KakaoMap() {
  const router = useRouter();
  const onClickMoveToMap = () => {
    router.push("/lecture/2903-kakao-map-routed");
  };

  return (
    <>
      <button onClick={onClickMoveToMap}>맵으로 이동하기</button>

      {/* <a href="/lecture/2903-kakao-map-routed">맵으로 이동하기</a> */}

      {/* router.push 와 똑같지만 a 태그는 아니다(CSR). 시멘틱 요소로 사용가능(상관관계 높임)  */}
      {/* <Link href="/lecture/2903-kakao-map-routed">
        <a>맵으로 이동하기 </a>
      </Link> */}
    </>
  );
}
