import PickUpPage from "../../src/units/pickItem/pickItem";
import { widthAuth } from "../../src/commons/withAuth";
function DetailPage() {
  return <PickUpPage />;
}
export default widthAuth(DetailPage);
