import BoardListPageUI from "../list/boardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../boards/list/boardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";

export default function boardListPage(props) {
  const router = useRouter();
  const { data: a, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: { page: 1 },
  });
  const { data: dataBoardCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const register = () => {
    router.push("/NEW");
  };

  const detailPage = (id: any) => {
    router.push(`/${id}`);
  };

  return (
    <BoardListPageUI
      register={register}
      detailPage={detailPage}
      searchClick={props.searchClick}
      a={a}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
    />
  );
}
