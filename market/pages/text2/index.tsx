import { useState } from "react";
import TextEditor01 from "../../src/units/TextEditor/TextEditor01";
// import {ITextEditorUIProps} from "../../"

export default function ToastEditor() {
  const [a, aa] = useState("");
  return (
    <div style={{ height: "1000px" }}>
      <TextEditor01 setValue={aa} value={a} height={"1000px"} />
    </div>
  );
}
