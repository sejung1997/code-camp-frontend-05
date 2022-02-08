import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { fireApp } from "../../../pages/_app";
import { useEffect, useState } from "react";
import FirebaseListPageUI from "./firebaseList.presenter";

export default function firebaseListPage() {
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(fireApp), "board");
      const result = await getDocs(board);
      const boardData = result.docs.map((el) => el.data());
      setBoardData(boardData);
    }
    fetchBoards();
  }, []);
  return <FirebaseListPageUI boardData={boardData} />;
}
