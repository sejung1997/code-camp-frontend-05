import BoardListPageUI from "../list/boardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
  FETCH_BOARDS_SEARCH,
} from "../../boards/list/boardList.queries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../src/commons/types/generated/types";
import _ from "lodash";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function boardListPage(props) {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const { data: a, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

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
  const dataSearch = (event) => {
    setKeyword(event.target.value);
  };
  // const onClickSearch = () => {
  //   const { data: s } = useQuery<
  //     Pick<IQuery, "fetchBoards">,
  //     IQueryFetchBoardsArgs
  //   >(FETCH_BOARDS);
  //   refetch({ page: 1, search: keyword });
  // };
  console.log(s?.fetchBoards);
  return (
    <BoardListPageUI
      register={register}
      detailPage={detailPage}
      searchClick={props.searchClick}
      a={a}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
      dataSearch={dataSearch}
      keyword={keyword}
      onClickSearch={onClickSearch}
      s={s}
    />
  );
}
