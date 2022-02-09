import _ from "lodash";
import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../scr/commons/types/generated/type";
const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;
export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  // const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); // globalState
  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  //   setKeyword(search);
  // };
  const getDebounce = _.debounce((data) => {
    refetch({ page: 1, search: data });
    setKeyword(data);
  }, 1000); // 마지막 작업(입력) 후 1초

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onclickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id), search: keyword });
  };
  return (
    <div>
      <h1>검색페이지</h1>
      검색어 입력
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onclickPage} id={String(index + 1)} key={index + 1}>
          {`${index + 1}`}
        </span>
      ))}
    </div>
  );
}
