import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { message } from "antd";

import {
  DISLIKE_COUNT,
  LIKE_COUNT,
  FETCH_BOARD,
  DELETE_BOARD,
} from "./boardDetail.query";
import BoardDetailPageUI from "./boardDetail.presenter";
export default function BoardDetailPage() {
  const router = useRouter();

  const [dislikeBoard] = useMutation(DISLIKE_COUNT);
  const [likeBoard] = useMutation(LIKE_COUNT);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.aaa },
  });

  const id = data?.fetchBoard._id;

  const update = () => {
    router.push(`/${id}/edit`);
  };
  const list = () => {
    router.push("./boardList");
  };
  const up = async () => {
    await likeBoard({
      variables: { boardId: router.query.aaa },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.aaa } },
      ],
    });
  };
  const down = async () => {
    await dislikeBoard({
      variables: { boardId: router.query.aaa },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.aaa } },
      ],
    });
  };
  const deleteBtn = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.aaa },
      });
      message.info("삭제되었습니다");
      router.push("/boardList");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <BoardDetailPageUI
      data={data}
      update={update}
      list={list}
      up={up}
      down={down}
      deleteBtn={deleteBtn}
    />
  );
}
