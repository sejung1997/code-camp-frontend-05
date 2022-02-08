import FirebaseWritePage from "../../src/boards/firebase/firebaseWrite.container";
import FirebaseListPage from "../../src/boards/firebase/firebaseList.container";
export default function FirebasePage() {
  return (
    <div>
      <FirebaseWritePage />
      <FirebaseListPage />
    </div>
  );
}
