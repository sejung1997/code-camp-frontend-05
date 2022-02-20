import CreateCommentPresenter from "./createCommentReply.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./CommentReply.gql&types";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";
import { kebabCase } from "lodash";

export default function createCommentContainer(props) {
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
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
          useditemQuestionId: props.el._id,
        },
      });
    } catch (error) {
      message.info(error.message);
    }
  };

  const update = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: inputs.contents,
          },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { page: 1, useditemId: String(router.query.id) },
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
