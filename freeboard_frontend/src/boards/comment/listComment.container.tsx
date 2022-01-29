import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import { FETCH_BOARD_COMMENT, DELETE_BOARD_COMMENT } from "./Comment.mutation";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../src/commons/types/generated/types";
import ListCommentPageUI from "./listComment.presenter";

export default function ListCommentPage() {
  const [ps, setPs] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [commentId, setCommentId] = useState("");
  const router = useRouter();

  const changePs = (event: ChangeEvent<HTMLInputElement>) => {
    setPs(event.target.value);
  };

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENT, {
    variables: { page: 1, boardId: String(router.query.aaa) },
  });

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

  const clickupdate = (event: MouseEvent<HTMLImageElement>) => {
    if (event.target instanceof Element) setCommentId(event.target.id);
    setIsVisible(true);
  };

  // const updateComment = (event: MouseEvent<HTMLImageElement>) => {
  //   setWriter(event.target.id.writer);
  // };
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments)
          return { fetchBoards: [...prev.fetchBoardComments] };

        return {
          fetchBoards: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <ListCommentPageUI
      data={data}
      changePs={changePs}
      isVisible={isVisible}
      checkDelete={checkDelete}
      clickupdate={clickupdate}
      clickCancle={clickCancle}
      onLoadMore={onLoadMore}
    />
  );
}
