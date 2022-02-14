import CommentEditPage from "./CommentEdit.presenter";
import { useMutation } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "../Comment.mutation";
import { useRouter } from "next/router";

import { useState, ChangeEvent } from "react";

import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../src/commons/types/generated/types";

export default function CommentEdit(props) {
  const router = useRouter();

  const [ps, setPs] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onUpdate = () => {
    setIsEdit(true);
  };
  const changePs = (event: ChangeEvent<HTMLInputElement>) => {
    setPs(event.target.value);
  };

  const checkDelete = async () => {
    try {
      await deleteBoardComment({
        variables: { password: ps, boardCommentId: props.el?._id },
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

  console.log(props.isEdit);
  const onModal = () => {
    setIsVisible((prev) => !prev);
  };
  const cancel = () => {
    setIsEdit((prev) => !prev);
  };
  console.log(isEdit);
  return (
    <CommentEditPage
      changePs={changePs}
      isVisible={isVisible}
      checkDelete={checkDelete}
      onModal={onModal}
      isEdit={isEdit}
      onUpdate={onUpdate}
      el={props.el}
      setIsEdit={setIsEdit}
      index={props.index}
      cancel={cancel}
    />
  );
}
