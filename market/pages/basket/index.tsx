import BasketPageContainer from "../../src/units/basket";
import { widthAuth } from "../../src/commons/withAuth";
function BasketPage() {
  return <BasketPageContainer />;
}
export default widthAuth(BasketPage);
