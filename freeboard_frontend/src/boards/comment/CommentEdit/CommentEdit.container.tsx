import CommentEditPage from "./CommentEdit.presenter";
import { useMutation } from "@apollo/client";
import {
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "../Comment.mutation";
import { useRouter } from "next/router";

import { useState, ChangeEvent, MouseEvent } from "react";

import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../src/commons/types/generated/types";

export default function CommentEdit(props) {
  const router = useRouter();
  const [inputs, setinputs] = useState({
    password: "",
    contents: "",
    boardCommentId: "",
  });
  const [ps, setPs] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const [commentId, setCommentId] = useState("");

  const [length, setLength] = useState("0");

  const [rating, setRating] = useState(0);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

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
  const changePs = (event: ChangeEvent<HTMLInputElement>) => {
    setPs(event.target.value);
  };

  const checkDelete = async () => {
    try {
      await deleteBoardComment({
        variables: { password: ps, boardCommentId: commentId },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { page: 1, boardId: router.query.aaa },
          },
        ],
      });
      setIsVisible(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const clickCancle = (event: MouseEvent<HTMLImageElement>) => {
    setIsVisible(false);
  };

  const onDelete = (event: MouseEvent<HTMLImageElement>) => {
    if (event.target instanceof Element) setCommentId(event.target.id);
    setIsVisible(true);
  };
  return (
    <CommentEditPage
      updateComment={updateComment}
      cancel={cancel}
      onchangeInput={onchangeInput}
      changePs={changePs}
      isVisible={isVisible}
      checkDelete={checkDelete}
      onDelete={onDelete}
      clickCancle={clickCancle}
      // onLoadMore={props.onLoadMore}
      length={length}
      isEdits={isEdits}
      onchangeRate={onchangeRate}
      onUpdate={onUpdate}
      el={props.el}
      index={props.index}
    />
  );
}
