import { firebaseApp } from "../../_app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // firebase 등록
    // collection(접속정보, 컬렉션 이름, 데이터)
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철",
      title: "제목",
      contents: "내용",
    });
  };
  const onClickFetch = async () => {
    // firebase 데이터 꺼내오기
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data()); // 파이에 베이스 문법
    console.log(docs);
  };

  return (
    <div>
      <h1>파이어베이스 연습</h1>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </div>
  );
}
