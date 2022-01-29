import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENT } from "./Comment.mutation";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../src/commons/types/generated/types";
import WriteCommentPageUI from "./writeComment.presenter";

export default function WriteCommentPage() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [length, setLength] = useState("0");
  const [value, setValue] = useState(3);

  const changeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const changeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);

    if (event.target.value.length < 100)
      setLength(String(event.target.value.length));
    else {
      setLength("100");
    }
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const myVariables = {
    createBoardCommentInput: {
      writer,
      password,
      contents,
      rating: value,
    },
    boardId: String(router.query.aaa),
  };

  const createComment = async () => {
    await createBoardComment({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENT,
          variables: { page: 1, boardId: String(router.query.aaa) },
        },
      ],
    });
    setContents("");
    setPassword("");
    setWriter("");
  };

  return (
    <WriteCommentPageUI
      changeContents={changeContents}
      createComment={createComment}
      changePassword={changePassword}
      changeWriter={changeWriter}
      length={length}
      // updateComment={updateComment}
      writer={writer}
      password={password}
      contents={contents}
      handleChange={handleChange}
      value={value}
    />
  );
}
