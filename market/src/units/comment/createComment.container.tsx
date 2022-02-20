import CreateCommentPresenter from "./createComment.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./Comment.gql&types";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { message } from "antd";
import { kebabCase } from "lodash";

export default function createCommentContainer(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
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
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: inputs.contents,
          },
          useditemId: String(router.query.id),
        },
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchUseditemQuestions: (prev) => {
                return [data.createUseditemQuestion, ...prev];
              },
            },
          });
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
        // update(cache, { data }) {
        //   const updatedId = data.updateUseditemQuestion;

        //   cache.modify({
        //     fields: {
        //       fetchUseditemQuestions: (prev, { readField }) => {
        //         const filterPrev = prev.map((el) => {
        //           if (readField("id", el) !== updatedId) return el;
        //           else return data.updateUseditemQuestion;
        //         });
        //         return [...filterPrev];
        //       },
        //     },
        //   });
        // },
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
      onToggle={props.onToggle}
    />
  );
}
