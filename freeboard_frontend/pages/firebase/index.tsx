import FirebaseWritePage from "../../src/boards/firebase/firebaseWrite.container";
import FirebaseListPage from "../../src/boards/firebase/firebaseList.container";
import { withAuth } from "../../src/commons/hocs/withAuth";

const FirebasePage = () => {
  return (
    <div>
      <FirebaseWritePage />
      <FirebaseListPage />
    </div>
  );
};
export default withAuth(FirebasePage);
