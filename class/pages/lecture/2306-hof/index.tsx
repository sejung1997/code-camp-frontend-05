import { MouseEvent } from "react";
export default function HofPage() {
  const onClickChild = (el: string) => (event: MouseEvent<HTMLDivElement>) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지</h1>
      {["철", "영", "훈"].map((el) => (
        <div key={el} id={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
