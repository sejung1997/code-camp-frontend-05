import { useMemo, useState } from "react";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import Dompurify from "dompurify";
import styled from "@emotion/styled";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const Main = styled.div`
  margin-top: 200px;
`;
export default function text() {
  const [contents, setContents] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ size: ["small", false, "large", "huge"] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
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
          ],
          ["image", "video"],
          ["clean"],
        ],
      },
    }),
    []
  );
  const handleChange = (value) => {
    setContents(value);
  };
  return (
    <Main>
      <ReactQuill
        onChange={handleChange}
        value={contents || "기본값"}
        modules={modules}
        theme="snow"
      />
      {process.browser && (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(String(contents)),
            }}
          />
        </div>
      )}
    </Main>
  );
}
