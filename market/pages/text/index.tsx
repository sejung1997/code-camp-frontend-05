import React, { useMemo, useRef, useState, forwardedRef } from "react";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import Dompurify from "dompurify";
import styled from "@emotion/styled";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
const ReactQuill = forwardedRef((props, ref) => {
  return (
    <ReactQuill
      {...props}
      forwardedRef={(el) => {
        ref = el;
      }}
    />
  );
});
const Main = styled.div`
  margin-top: 200px;
`;
const Btngroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddBtn = styled.div`
  padding: 20px;
  border: 1px solid green;
  margin-bottom: 40px;
  :hover {
    cursor: pointer;
    background-color: yellow;
  }
`;
export default function text() {
  const quillRef = React.useRef(null);
  const [contents, setContents] = useState("");
  const schedules = ["상세일정 1", "상세일정 2", "상세일정 3"];

  const addEl = (el, index) => () => {
    const temp = `<h1><span class="ql-size-large" style="background-color: rgb(255, 255, 0);">${el}</sp></h1></blockquote>`;
    setContents(contents + temp);
    const ddd = document.getElementById("reactQuill");
    console.log(ddd);
    ddd.focus();
    console.log(quillRef);
  };
  const imageHandler = () => {
    console.log("df");
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("className", "ImgUrl");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);

    input.click();
    input.onchange = async (event) => {
      // const [file] = input.files;
      console.log(event.target);
      // // S3 Presigned URL로 업로드하고 image url 받아오기
      // const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (await getS3PresignedURL(file.name)).data;
      // await uploadImage(presignedURL, file);

      // // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
      // const range = quillRef.current.getEditorSelection();
      // quillRef.current.getEditor().insertEmbed(range.index, 'image', imageURL)
      // quillRef.current.getEditor().setSelection(range.index + 1);
      // document.body.querySelector(':scope > input').remove()
      console.log(quillRef?.current?.getEditor());
      // const range = quillRef?.current.getEditorSelection();
      // quillRef.current.getEditor().insertEmbed(range.index, "image", ImgUrl);
      // quillRef.current.getEditor().setSelection(range.index + 1);
      // document.body.querySelector(":scope > input").remove();
    };
  };
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, 7] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            "link",
          ],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
            {},
          ],
          ["image", "video"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  const handleChange = (value) => {
    setContents(value);
    console.log(value);
  };

  const moveSroll = (index) => () => {
    // h1Ref?.current?.scrollIntoView({ behavior: "smooth" });
    const aaaa = document.querySelectorAll(".ql-size-large")[index];
    console.log(aaaa);

    aaaa.scrollIntoView({ block: "center", behavior: "smooth" });
  };

  return (
    <Main>
      <h1>Day 1 </h1>
      <Btngroup>
        {schedules.map((el, index) => (
          <Btngroup key={index}>
            <AddBtn onClick={addEl(el, index)}>{el}</AddBtn>
          </Btngroup>
        ))}
        <ForwardedRefComponent
          id="reactQuill"
          ref={quillRef}
          onChange={handleChange}
          value={contents || "기본값"}
          modules={modules}
          theme="snow"
        />
      </Btngroup>
      <br /> <br />
      <br />
      <div style={{ fontSize: "40px" }}>미리보기</div>
      <h1>Day 1 </h1>
      <Btngroup>
        {schedules.map((el, index) => (
          <AddBtn key={index} onClick={moveSroll(index)}>
            {el} 찾기
          </AddBtn>
        ))}
      </Btngroup>
      {process.browser && (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: String(contents),
            }}
          />
        </div>
      )}
      <div>{contents}</div>
    </Main>
  );
}
