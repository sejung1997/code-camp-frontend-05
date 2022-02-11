import { useState } from "react";
import FunctionalComponent from "../../../scr/components/units/21-functional-component/functionalComponent.container";
export default function sStatePrevPage() {
  const [count, setCount] = useState(0);

  // 화살표함수
  // const onclickCount = () => {
  //   setCount((prev) => prev + 1);
  // };

  // 그냥함수
  // const onclickCount = () => {
  //   setCount(function (prev) {
  //     // 로직추가 가능
  //     return prev + 1;
  //   });
  // };

  // 매게변수 변경
  const onclickCount = () => {
    setCount(function (fddd) {
      // 로직추가 가능
      return fddd + 1;
    });
  };
  return (
    <>
      <div>
        <div>카운트: {count}</div>
        <div onClick={onclickCount}>카운트 증가</div>
      </div>
    </>
  );
}
