import ImageSearchPage from "../../src/boards/imageSearch/imageSearch.container";
import { withAuth } from "../../src/commons/hocs/withAuth";

const ImagePage = () => {
  return <ImageSearchPage />;
};
export default withAuth(ImagePage);
