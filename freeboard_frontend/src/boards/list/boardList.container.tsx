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
import { useState } from "react";

export default function boardListPage(props) {
  // const [searchPage, setSearchPage] = useState(1);
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
  const dataAll = [];
  const dataSearch = () => {
    console.log(dataBoardCount?.fetchBoardsCount);
    for (let i = 0; i < Math.ceil(dataBoardCount?.fetchBoardsCount / 10); i++) {
      refetch({ page: Number(i) });
      console.log(a?.fetchBoards);
    }

    // console.log(a?.fetchBoards);
    // for (let j = 0; j < dataBoardCount?.fetchBoardsCount; j++) {
    //   dataAll.push([a?.fetchBoards[j]]);
    // }
    // console.log(dataAll);
  };
  return (
    <BoardListPageUI
      register={register}
      detailPage={detailPage}
      searchClick={props.searchClick}
      a={a}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
      dataSearch={dataSearch}
    />
  );
}
