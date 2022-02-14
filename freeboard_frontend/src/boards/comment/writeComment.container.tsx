import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, useEffect } from "react";
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

export default function WriteCommentPage(props) {
  const [length, setLength] = useState("0");
  const router = useRouter();
  const [inputs, setinputs] = useState({
    writer: "",
    password: "",
    contents: "",
  });

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

  const createComment = async () => {
    console.log(inputs);
    console.log(router.query.aaa);
    const myVariables = {
      createBoardCommentInput: {
        writer: inputs.writer,
        password: inputs.password,
        contents: inputs.contents,
        rating: value,
      },
      boardId: String(router.query.aaa),
    };
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
  useEffect(() => {}, [createBoardComment]);

  const update = async () => {
    const myVariables = {
      updateBoardCommentInput: {},
      password: inputs.password,
      boardCommentId: props.el._id,
    };
    if (inputs.contents)
      myVariables.updateBoardCommentInput.contents = inputs.contents;
    if (value) myVariables.updateBoardCommentInput.rating = value;
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
    props.setIsEdit((prev) => !prev);
  };

  return (
    <WriteCommentPageUI
      createComment={createComment}
      changeinputs={changeinputs}
      length={length}
      // updateComment={updateComment}
      isEdit={props.isEdit}
      handleChange={handleChange}
      value={value}
      el={props.el}
      cancel={props.cancel}
      update={update}
    />
  );
}
