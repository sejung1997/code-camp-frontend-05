import { useState } from "react";
import CommentEditPage from "./CommentEdit.presenter";
import { gql, useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT, FETCH_BOARD_COMMENT } from "../Comment.mutation";
import { useRouter } from "next/router";
import Password from "antd/lib/input/Password";

export default function CommentEdit(props) {
  const router = useRouter();
  const [inputs, setinputs] = useState({
    password: "",
    contents: "",
    rating: "",
  });

  const [updateBoardComment, refetch] = useMutation(UPDATE_BOARD_COMMENT);

  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const onchangeInput = (event) => {
    setinputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const myVariables = {
    updateBoardCommentInput: {
      contents: inputs[0],
      rating: inputs[2],
    },
    password: inputs[1],
  };
  const update = async () => {
    await updateBoardComment({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENT,
          variables: { page: 1, boardId: String(router.query.aaa) },
        },
      ],
    });
  };
  const updateComment = (event) => {
    if (isEdits) {
      update();
    } else {
      isEdits[event.target.id] = true;
      setIsEdits([...isEdits]);
      // setIsEdit(true);
      console.log(isEdits);
    }
  };
  const cancel = (event) => {
    isEdits[event.target.id] = false;
    setIsEdits([...isEdits]);
  };
  return (
    <CommentEditPage
      updateComment={updateComment}
      cancel={cancel}
      onchangeInput={onchangeInput}
    />
  );
}
