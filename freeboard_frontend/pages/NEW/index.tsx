import Home from "../../src/boards/write/boardWrite.container";
// import { withAuth } from "../../src/commons/hocs/withAuth";

export default function boardWritePage() {
  return <Home isEdit={false} />;
}
// export default withAuth(boardWritePage);
