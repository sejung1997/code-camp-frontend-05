import { useState } from "react";
import CommentEditPage from "./CommentEdit.presenter";
import { useMutation } from "@apollo/client";
import { UPDATE_BOARD_COMMENT, FETCH_BOARD_COMMENT } from "../Comment.mutation";
import { useRouter } from "next/router";

export default function CommentEdit(props) {
  const router = useRouter();
  const [inputs, setinputs] = useState({
    password: "",
    contents: "",
    boardCommentId: "",
  });
  const [rating, setRating] = useState(0);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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
  const onchangeRate = (value) => {
    setRating(value);
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
          query: FETCH_BOARD_COMMENT,
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

  const onUpdate = () => {
    isEdits[props.index] = true;
    setIsEdits([...isEdits]);
  };

  const cancel = () => {
    isEdits[props.index] = false;
    setIsEdits([...isEdits]);
  };
  return (
    <CommentEditPage
      updateComment={updateComment}
      cancel={cancel}
      onchangeInput={onchangeInput}
      data={props.data}
      changePs={props.changePs}
      isVisible={props.isVisible}
      checkDelete={props.checkDelete}
      clickupdate={props.clickupdate}
      clickCancle={props.clickCancle}
      onLoadMore={props.onLoadMore}
      length={props.length}
      isEdits={isEdits}
      onchangeRate={onchangeRate}
      onUpdate={onUpdate}
      el={props.el}
      index={props.index}
    />
  );
}
