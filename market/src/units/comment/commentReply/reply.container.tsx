import { useState } from "react";
import CommnetReplyPresenter from "./reply.presenter";
import { DELETE_USED_ITEM_QUESTION_ANSWER } from "../CommentEdit/CommentEdit.gql&types";
import { useMutation } from "@apollo/client";
export default function CommnetReplyContainer(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const onToggle = () => {
    setIsEdit((prev) => !prev);
  };
  const checkDeleteAnswer = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionAnswerId: props.el._id },
        update(cache, { data }) {
          const deletedId = data.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
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
  return (
    <CommnetReplyPresenter
      index={props.index}
      el={props.el}
      checkDeleteAnswer={checkDeleteAnswer}
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onToggle={onToggle}
      questionId={props.questionId}
    />
  );
}
