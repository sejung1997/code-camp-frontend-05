// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // ES6

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // 서버사이드렌더링 false

export default function WebEditorPage() {
  const handleChange = (value: string) => {
    console.log(value);
  };
  // if (process.browser) {
  //   console.log("브라우져");
  // } else {
  //   console.log("프론트");
  // }

  return (
    <div>
      작성자: <input type="test" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={handleChange} />
      <button>등록하기</button>
      <br />
    </div>
  );
}
