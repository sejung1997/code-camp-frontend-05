import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import MemoizationPresenterPage from "./presenter";
export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const aaa = useMemo(() => Math.random(), []);
  // return 하는 값 기억 [] 안에 값이 변화면 return 값 바뀜
  console.log(aaa);

  const onClickCountlet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 리렌더링 될때 다시 만들어지지 않음, 기존 값을 불러와서 사용

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);

    setCountState((prev) => prev + 1);
  }, []);

  // useMemo로 useCallback 만들어보기
  // const onClickCountState = useMemo(
  //   () => () => {
  //     console.log(countState + 1);

  //     setCountState((prev) => prev + 1);
  //   },
  //   []
  // );
  // 원래 함수
  // const onClickCountState = () => {
  //   console.log(countState + 1);

  //   setCountState((prev) => prev + 1);
  // };

  return (
    <>
      <div>
        <div>============================================================</div>
        <h1>이것은 컨테이너</h1>
        <div>카운트(countLet)+1: {countLet}</div>
        <button onClick={onClickCountlet}>카운트(countLet)+1</button>

        <div>카운트(countState)+1: {countState}</div>
        <button onClick={onClickCountState}>카운트(countState)+1</button>
        <div>============================================================</div>
        <MemoizationPresenterPage />
      </div>
    </>
  );
}
