import CreateCommentPresenter from "./createCommentReply.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTIONS_ANSWERS,
} from "./CommentReply.gql&types";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";

export default function createCommentContainer(props) {
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  const [inputs, setinputs] = useState({
    contents: "",
    length: "0",
  });
  const changeinputs = (event) => {
    setinputs({
      length: event.target.value.length,
      contents: event.target.value,
    });
  };

  const createComment = async () => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: {
            contents: inputs.contents,
          },
          useditemQuestionId: props.questionId,
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev) => {
                return [data.createUseditemQuestionAnswer, ...prev];
              },
            },
          });
        },
      });
      props.onToggle("answer");
    } catch (error) {
      message.info(error.message);
    }
  };

  const update = async () => {
    console.log(props.questionId);
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: inputs.contents,
          },
          useditemQuestionAnswerId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS_ANSWERS,
            variables: { page: 1, useditemQuestionId: props.questionId },
          },
        ],
      });
      props.setIsEdit((prev) => !prev);
    } catch (error) {
      message.info(error.message);
    }
  };
  return (
    <CreateCommentPresenter
      createComment={createComment}
      inputs={inputs}
      changeinputs={changeinputs}
      update={update}
      el={props.el}
      isEdit={props.isEdit}
      isAnswer={props.isAnswer}
      onToggle={props.onToggle}
    />
  );
}
