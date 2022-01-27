import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span onClick={onclickPage} id={String(el)} key={String(el)}>
          {`${el}`}
        </span>
      ))}
    </div>
  );
}
