import { useMemo, useRef, useState, ChangeEvent, useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
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
  const quillRef = useRef();

  let quillCurrent;
  let editor;
  let currentFocus;

  const setRefValue = () => {
    quillCurrent = quillRef.current;
    editor = quillCurrent?.getEditor();
    currentFocus = quillCurrent?.getEditorSelection();
    if (!editor) return;
    editor.focus();
  };
  setRefValue();
  console.log(editor);
  const addEl = (el: string) => () => {
    editor?.insertText(currentFocus.index + 1, el, {
      header: 1,
      background: "#ffff00",
      size: "large",
    });
    console.log(el.length);
    editor.insertText(currentFocus.index + el.length + 3, "- 상세일정 설명", {
      header: 7,
    });
    currentFocus.index += 17;
    editor.setSelection(currentFocus.index, 0, 0);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("className", "ImgUrl");
    input.setAttribute("accept", "image/*");
    document.body.appendChild(input);
    input.click();

    input.onchange = async (event: ChangeEvent<HTMLInputElement>) => {
      if (!editor) {
        console.log("에디터가 없어용");
        setRefValue();
      }
      editor.focus();

      const file = event.target.files?.[0];
      const result = await uploadFile({ variables: { file } });
      const fileUrl = result.data?.uploadFile.url;

      editor.insertEmbed(
        quillCurrent.getEditorSelection().index,
        "image",
        `https://storage.googleapis.com/${fileUrl}`
      );
      input.remove();
    };
  };
  const customFunc = () => {
    alert("df");
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ custom: <div>dd</div> }],
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
        handlers: { image: imageHandler, custom: customFunc },
      },
    }),
    []
  );

  const handleChange = (value) => {
    console.log(value);
    setContents(value);
  };

  const moveSroll = (index) => () => {
    // h1Ref?.currenrtrtrt?.scrollIntoView({ behavior: "smooth" });
    const aaaa = document.querySelectorAll(".ql-size-large")[index];
    console.log(aaaa);

    aaaa.scrollIntoView({ block: "center", behavior: "smooth" });
  };
  useEffect(() => {
    setRefValue();
    console.log(editor);
    if (contents.includes("<img src")) {
      contents.replace("<img src", '<p class="ql-align-center"><img src');
      contents.replace('.png">', '.png"></p>');
      setContents(contents);
    }
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
