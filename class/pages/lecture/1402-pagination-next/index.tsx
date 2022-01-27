import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationNextPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

  const onclickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };
  return (
    <div>
      <h1>페이지네이션 연습</h1>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))}
      <span onClick={onClickPrevPage}>이전페이지</span>
      {new Array(10).fill(1).map((_, index) => (
        <span
          onClick={onclickPage}
          id={String(index + startPage)}
          key={String(index + startPage)}
        >
          {`${index + startPage}`}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
