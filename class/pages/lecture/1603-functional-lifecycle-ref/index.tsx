import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// interface IState {
//   count: number;
// }
export default function LifeCycleRefPage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  // componentDidMount와 동일: return 다 만들어지고 나서 한번만 실행
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    // componentWillUnmoun와 동일
    return () => {
      console.log("여기서 나갈래요");
    };
  }, [count]); // 의존성 배열

  // componentDidUpdate와 비슷: 뭐하나 바뀌면 실행(최초 실행시에도 실행됨)
  useEffect(() => {
    console.log("수정되고 다시그려짐");
  });

  const onClickCounter = () => {
    console.log("zkdk");
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };
  console.log("언제실행/?"); // componentDidMount와 비교
  return (
    <div>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!!!!!!!!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}
