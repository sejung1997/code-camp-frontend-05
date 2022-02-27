import FetchItemContainer from "../../src/units/List/container";
import { widthAuth } from "../../src/commons/withAuth";
const ListPage = () => {
  return <FetchItemContainer />;
};
export default widthAuth(ListPage);
