import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

export default function PaginationPage() {
  const { data } = useQuery(FETCH_BOARDS, { variables: { page: 1 } });
  const [isEdits, setIsEdits] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const onClickIsEdit = (event) => {
    isEdits[event.target.id] = true;
    setIsEdits([...isEdits]);
  };

  return (
    <div>
      <h1>댓글 수정 연습</h1>
      {data?.fetchBoards?.map((el, index) => (
        <div key={el._id}>
          {isEdits[index] === false && (
            <div key={el._id}>
              <span>
                {el.title} {el.writer}
              </span>
              <button onClick={onClickIsEdit} id={index}>
                수정하기
              </button>
            </div>
          )}
          {isEdits[index] && <div>수정하기화면</div>}
        </div>
      ))}
    </div>
  );
}
