import React, {
  useMemo,
  useRef,
  useState,
  ChangeEvent,
  useEffect,
  createRef,
} from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import Dompurify from "dompurify";
import styled from "@emotion/styled";
import { add, create } from "lodash";
import { css, Global } from "@emotion/react";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const ReactQuill = dynamic(
  async () => {
    const { default: QuillEditor } = await import("react-quill");
    return function ({ forwardedRef, ...props }) {
      return <QuillEditor ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

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
const TempStyle = css`
  .ql-editor img {
    max-width: 200px !important;
  }
`;
export default function text() {
  const [contents, setContents] = useState("");
  const [fileReaderUrl, setFileReaderUrl] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const schedules = ["상세일정 1", "상세일정 2", "상세일정 3"];
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);
  const quillRef = createRef();
  console.log(quillRef);
  let editor;
  let current;
  let currentFocus = 0;
  const addEl = (el) => () => {
    const temp = `<h1><span class="ql-size-large" style="background-color: rgb(255, 255, 0);">${el}</sp></h1></blockquote>`;
    // setContents(contents + temp);

    editor.insertEmbed(currentFocus, "div", "ddd");
    // console.log(editor);
    // console.log(current?.getEditorSelection());
    // const range = editor.getLength();

    // console.log(range);
    // current?.setEditorSelection(currentFocus);
    // editor.insertEmbed(range, "image", "ddd");
  };

  const imageHandler = () => {
    console.log(currentFocus);
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("className", "ImgUrl");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    console.log(quillRef?.current);
    input.click();
    input.onchange = async (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = (data) => {
        if (typeof data.target?.result === "string") {
          // setFileReaderUrl(data.target?.result);
          // const temp = `<img src='${data.target?.result}'/>`;
          // setContents(contents + temp);
        }
      };
      try {
        const result = await uploadFile({ variables: { file } });
        const fileUrl = result.data?.uploadFile.url;
        console.log(currentFocus);
        editor.insertEmbed(
          currentFocus,
          "image",
          `https://storage.googleapis.com/${fileUrl}`
        );
        const temp = `<img src='https://storage.googleapis.com/${fileUrl}'/>`;
        // console.log(contents);
        // setContents(contents + temp);
        // console.log(contents + temp);
        // setContents(contents + temp);
        // setImgUrl(fileUrl);
      } catch (error) {
        // message.info(message);
      }
      // // S3 Presigned URL로 업로드하고 image url 받아오기
      // const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (await getS3PresignedURL(file.name)).data;
      // await uploadImage(presignedURL, file);
      console.log(quillRef?.current);

      // // 현재 커서 위치에 이미지를 삽입하고 커서 위치를 +1 하기
      // const range = quillRef.current.getEditorSelection();
      // quillRef.current.getEditor().insertEmbed(range.index, 'image', imageURL)
      // quillRef.current.getEditor().setSelection(range.index + 1);
      document.body.querySelector(":scope > input").remove();
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
              // prettier-ignore
              color: [
                "#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466","custom-color",
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
  useEffect(() => {
    // const range = quillRef.current.getEditorSelection();
    // quillRef.current.getEditor().insertEmbed(range.index, 'image', imageURL)
    // quillRef.current.getEditor().setSelection(range.index + 1);
    // if (!quillRef) return;
    // if (quillRef.current === null) return;

    // quillRef.current?.getEditor().insertEmbed(range?.index, "image", "sdfdd");
    // quillRef.current?.getEditor().setSelection(range?.index + 1);
    // inputContents();
    // if (imgUrl) {
    //   addEl(imgUrl);
    // }
    editor = quillRef.current?.getEditor();

    const range = quillRef.current?.getEditorSelection();
    current = quillRef.current;
    currentFocus = range;
    console.log(currentFocus);
    console.log(editor);

    // current = quillRef.current;
    // quillRef.current?.setEditorSelection(range + 1);
    // quillRef.current?.getEditor()?.setSelection(range + 1);
  }, [imageHandler, addEl]);

  return (
    <Main>
      <h1>Day 1 </h1>
      <Global styles={TempStyle} />
      <Btngroup>
        {schedules.map((el, index) => (
          <Btngroup key={index}>
            <AddBtn onClick={addEl(el, index)}>{el}</AddBtn>
          </Btngroup>
        ))}
        <ReactQuill
          forwardedRef={quillRef}
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
      <button onClick={imageHandler}>0000000000000000000000</button>
      <div>{contents}</div>
    </Main>
  );
}
