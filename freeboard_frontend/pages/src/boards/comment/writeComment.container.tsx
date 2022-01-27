import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./writeComment.mutation";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IMutationCreateBoardCommentArgs,
} from "../../../../src/commons/types/generated/types";
import WriteCommentPageUI from "./writeComment.presenter";

export default function WriteCommentPage() {
  const router = useRouter();
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [length, setLength] = useState("0");
  const [ps, setPs] = useState("");
  const [value, setValue] = useState(3);
  const [isVisible, setIsVisible] = useState(false);
  const [commentId, setCommentId] = useState("");

  const changeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const changeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);

    if (event.target.value.length < 100)
      setLength(String(event.target.value.length));
    else {
      setLength("100");
    }
  };

  const changePs = (event: ChangeEvent<HTMLInputElement>) => {
    setPs(event.target.value);
  };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const handleChange = (value) => {
    setValue(value);
  };
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.aaa) },
  });
  // console.log(router.query.aaa);

  const myVariables = {
    createBoardCommentInput: {
      writer,
      password,
      contents,
      rating: value,
    },
    boardId: String(router.query.aaa),
  };

  const createComment = async () => {
    await createBoardComment({
      variables: myVariables,
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENT,
          variables: { page: 1, boardId: String(router.query.aaa) },
        },
      ],
    });
    setContents("");
    setPassword("");
    setWriter("");
  };
  // const updateComment = (event: MouseEvent<HTMLImageElement>) => {
  //   setWriter(event.target.id.writer);
  // };

  const checkDelete = async () => {
    console.log("gh확인");
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

  const clickupdate = (event: MouseEvent<HTMLImageElement>) => {
    if (event.target instanceof Element) setCommentId(event.target.id);
    setIsVisible(true);
  };

  return (
    <WriteCommentPageUI
      changeContents={changeContents}
      createComment={createComment}
      changePassword={changePassword}
      changeWriter={changeWriter}
      length={length}
      data={data}
      // updateComment={updateComment}
      changePs={changePs}
      writer={writer}
      password={password}
      contents={contents}
      handleChange={handleChange}
      value={value}
      isVisible={isVisible}
      checkDelete={checkDelete}
      clickupdate={clickupdate}
      clickCancle={clickCancle}
    />
  );
}
