import BoardDetailPage from "../../src/boards/detail/boardDetail.container";
import { withAuth } from "../../src/commons/hocs/withAuth";

const BoardDetail = () => {
  return <BoardDetailPage />;
};
export default withAuth(BoardDetail);
