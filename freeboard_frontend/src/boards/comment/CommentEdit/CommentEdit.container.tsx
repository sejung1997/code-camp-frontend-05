import CommentEditPage from "./CommentEdit.presenter";
import { useMutation } from "@apollo/client";
import {
  UPDATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
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

  const [ps, setPs] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const [commentId, setCommentId] = useState("");

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onUpdate = () => {
    props.setIsEdits(true);
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
            query: FETCH_BOARD_COMMENTS,
            variables: { page: 1, boardId: String(router.query.aaa) },
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
