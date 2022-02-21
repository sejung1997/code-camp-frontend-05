import { useForm } from "react-hook-form";

// import ReactQuill from "react-quill"; // 다이나믹 임포트로 변경하기
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // ES6
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../scr/commons/types/generated/type";
import Dompurify from "dompurify";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      _id
    }
  }
`;
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.id) },
    }
  );
  return (
    <div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}
      {process.browser && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(String(data?.fetchBoard.contents)),
          }}
        />
      )}
    </div>
  );
}

//  contents: "<img src='#' onerror=" console.log(localStorage.getItem(\"accessToken\"))"/>"
