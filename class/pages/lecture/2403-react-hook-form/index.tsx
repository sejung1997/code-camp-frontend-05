import { useState } from "react";
import { useForm } from "react-hook-form";
interface FormValues {
  myWriter?: string;
  myTile?: string;
  mycontents?: string;
}
export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();

  const onclickSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onclickSubmit)}>
      작성자 : <input type="text" {...register("myWriter")} />
      제목 : <input type="text" {...register("myTitle")} />
      내용 : <input type="text" {...register("myContents")} />
      <button>제출하기</button>
      {/* 버튼 클릭하면 onSubmit함수가  실행됨  type="button"이면 실행안됨 기본값은 submit* /}
      {/* <button type="button" onclick={}>나만의 버튼</button> */}
    </form>
  );
}
