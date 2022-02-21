import { useForm } from "react-hook-form";

// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // ES6

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // 서버사이드렌더링 false

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const handleChange = (value: string) => {
    console.log(value);
    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p)" ? "" : value);

    // onChange 됐는지 않됐는지 REACT-HOOK-FORM에 알려주는 기능
    trigger("contents");
  };
  // if (process.browser) {
  //   console.log("브라우져");
  // } else {
  //   console.log("프론트");
  // }

  return (
    <div>
      작성자: <input type="test" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      내용: <ReactQuill onChange={handleChange} {...register("writer")} />
      <button>등록하기</button>
      <br />
    </div>
  );
}
