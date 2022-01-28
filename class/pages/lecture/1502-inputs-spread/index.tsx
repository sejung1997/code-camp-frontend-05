import { useMutation } from "@apollo/client";
import Title from "antd/lib/skeleton/Title";
import { useState } from "react";
import BoardWriteUI from "./BoardWirte.presenter.js";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  // const [MyWriter, setMyWriter] = useState("");
  // const [MyTitle, setMyTitle] = useState("");
  // const [MyContent, setMyContent] = useState("");
  const [inputs, setInputs] = useState({ writer: "", title: "", contents: "" });

  const [qqq] = useMutation(CREATE_BOARD);

  const zzz = async () => {
    const result = await qqq({
      variables: { ...inputs },
    });
  };

  const onChangeinput = (event) => {
    // setMyContent(event.target.value);
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <div>스프레드연산자ㅏㅏㅏㅏ</div>
      <input type="text" id="writer" onChange={onChangeinput} />
      <input type="text" id="title" onChange={onChangeinput} />
      <input type="text" id="contents" onChange={onChangeinput} />
    </div>
  );
}
