import CommentEditPage from "./CommentEdit.presenter";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "../CommentEdit/CommentEdit.gql&types";
import { useRouter } from "next/router";

import { useState, ChangeEvent } from "react";

export default function CommentEdit(props) {
  const router = useRouter();

  const [isEdit, setIsEdit] = useState(false);
  const [isAnswer, setIsAnswer] = useState(false);

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const { data: answerData } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id, page: 1 },
  });

  const checkDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.el?._id },
        update(cache, { data }) {
          const deletedId = data.deleteUseditemQuestion;
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const filterPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...filterPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onToggle = (id) => {
    if (id === "edit") setIsEdit((prev) => !prev);
    if (id === "answer") setIsAnswer((prev) => !prev);
  };
  return (
    <CommentEditPage
      checkDelete={checkDelete}
      isEdit={isEdit}
      el={props.el}
      setIsEdit={setIsEdit}
      index={props.index}
      onToggle={onToggle}
      isAnswer={isAnswer}
      setIsAnswer={setIsAnswer}
      answerData={answerData}
    />
  );
}
