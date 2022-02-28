import PickUpPage from "../../src/units/pick/index";
import { widthAuth } from "../../src/commons/withAuth";
function DetailPage() {
  return <PickUpPage />;
}
export default widthAuth(DetailPage);
