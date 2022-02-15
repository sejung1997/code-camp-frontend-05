import BoardListPage from "../../src/boards/list/boardList.container";
import { withAuth } from "../../src/commons/hocs/withAuth";

const BOARLISTPAGE = () => {
  return <BoardListPage />;
};
export default withAuth(BOARLISTPAGE);
