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
import _ from "lodash";
import { useState } from "react";
import { ContactsOutlined } from "@ant-design/icons";
export default function boardListPage(props) {
  const [keyword, setKeyword] = useState("");
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
  const debounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
    console.log(data);
  }, 500);
  const changeKeyword = (event) => {
    console.log(event.target.value);
    debounce(event.target.value);
  };
  // const onClickSearch = () => {
  //   refetch({ page: 1, search: keyword });
  // };
  return (
    <BoardListPageUI
      register={register}
      detailPage={detailPage}
      searchClick={props.searchClick}
      a={a}
      refetch={refetch}
      count={dataBoardCount?.fetchBoardsCount}
      changeKeyword={changeKeyword}
      keyword={keyword}
      // onClickSearch={onClickSearch}
    />
  );
}
