import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_COMMENT,
} from "./Comment.mutation";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../src/commons/types/generated/types";
import WriteCommentPageUI from "./writeComment.presenter";

export default function WriteCommentPage() {
  const [length, setLength] = useState("0");
  const router = useRouter();
  const [inputs, setinputs] = useState({
    writer: "",
    password: "",
    contents: "",
    boardCommentId: "",
  });
  const [isEdits, setIsEdits] = useState(false);

  const [value, setValue] = useState(3);

  const changeinputs = (event: ChangeEvent<HTMLInputElement>) => {
    setinputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    if (event.target.id === "contents" && event.target.value.length < 100)
      setLength(String(event.target.value.length));
    else {
      setLength("100");
    }
  };

  const handleChange = (value) => {
    setValue(value);
  };
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  const myVariables = {
    createBoardCommentInput: {
      writer: inputs.writer,
      password: inputs.password,
      contents: inputs.contents,
      rating: value,
    },
    boardId: String(router.query.aaa),
  };

  const createComment = async () => {
    await createBoardComment({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { page: 1, boardId: String(router.query.aaa) },
        },
      ],
    });
    setinputs({ ...inputs, writer: "", password: "", contents: "" });
  };

  const update = async () => {
    const myVariables = {
      updateBoardCommentInput: {},
      password: inputs.password,
      boardCommentId: String(inputs.boardCommentId),
    };
    if (inputs.contents)
      myVariables.updateBoardCommentInput.contents = inputs.contents;
    if (rating) myVariables.updateBoardCommentInput.rating = rating;
    console.log(myVariables);

    await updateBoardComment({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { page: 1, boardId: String(router.query.aaa) },
        },
      ],
    });
  };

  const updateComment = (event) => {
    inputs.boardCommentId = event.target.id;
    setinputs({
      ...inputs,
      boardCommentId: event.target.id,
    });
    isEdits[props.index] = false;
    setIsEdits([...isEdits]);
    update();
  };

  const cancel = () => {
    setIsEdits(false);
  };

  return (
    <WriteCommentPageUI
      createComment={createComment}
      changeinputs={changeinputs}
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
