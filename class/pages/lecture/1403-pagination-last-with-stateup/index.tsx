import { gql, useQuery } from "@apollo/client";

import Boards from "../../../scr/components/units/14-boards-pagination/Board";
import Pagination from "../../../scr/components/units/14-boards-pagination/pagination";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function PaginationLastPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });

  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardCount?.fetchBoardsCount / 10);

  return (
    <div>
      <Boards data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </div>
  );
}
