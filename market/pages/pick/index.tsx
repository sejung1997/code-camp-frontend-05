import PickUpPage from "../../src/units/pick/pickContainer";
import { widthAuth } from "../../src/commons/withAuth";
function DetailPage() {
  return <PickUpPage />;
}
export default widthAuth(DetailPage);
