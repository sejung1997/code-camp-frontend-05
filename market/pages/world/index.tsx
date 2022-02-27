import FetchItemContainer from "../../src/units/List2/container";
import { widthAuth } from "../../src/commons/withAuth";
const WorldCupPage = () => {
  return <FetchItemContainer />;
};
export default widthAuth(WorldCupPage);
