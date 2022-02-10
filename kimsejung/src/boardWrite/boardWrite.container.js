import BoardWritePageUI from "./boardWrite.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardWrite.gql";
import { message } from "antd";

export default function boardWriteContainer(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
    writer: "",
    password: "",
  });

  const [imgUrl, setImgUrl] = useState(["", "", ""]);
  const changeInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const submit = async () => {
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: inputs.title,
            writer: inputs.writer,
            contents: inputs.contents,
            images: imgUrl,
            password: inputs.password,
          },
        },
      });
      console.log(result.data.createBoard);

      const id = result.data.createBoard._id;
      message.info("등록이 완료되었습니다");
      router.push("/boardList");
    } catch (error) {
      alert(error.message);
    }
  };
  const update = async () => {
    const updateBoardInput = {
      images: props.el.images,
    };
    const MyVariables = {
      updateBoardInput,
      boardId: props.el._id,
      password: inputs.password,
    };

    if (inputs.title !== "") MyVariables.updateBoardInput.title = inputs.title;
    if (inputs.contents !== "")
      MyVariables.updateBoardInput.contents = inputs.contents;

    try {
      const result2 = await updateBoard({
        variables: MyVariables,
      });
      const id2 = result2.data.updateBoard._id;
      message.info("수정이 완료되었습니다");
      router.push("/boardList");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardWritePageUI
      changeInput={changeInput}
      submit={submit}
      setInputs={setInputs}
      imgUrl={imgUrl}
      setImgUrl={setImgUrl}
      data={props.el}
      update={update}
    />
  );
}
