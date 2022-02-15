import Home from "../../src/boards/write/boardWrite.container";
import { withAuth } from "../../src/commons/hocs/withAuth";

const boardWritePage = () => {
  return <Home isEdit={false} />;
};
export default withAuth(boardWritePage);
