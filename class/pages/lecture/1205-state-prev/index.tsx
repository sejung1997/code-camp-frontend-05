import { useState } from "react";

export default function SteatePrevPage() {
  const [count, setCount] = useState(0)

  const onClickCountUp = () => {
   
    setCount((prev) => (prev+1))
    setCount((prev) => (prev+1))
    setCount((prev) => (prev+1))
  }
  return (
    <div>
      <div> 현재 카운트{count}</div>
      <button onClick={onClickCountUp}> 카운트 올리기</button>
    </div>
  )
}