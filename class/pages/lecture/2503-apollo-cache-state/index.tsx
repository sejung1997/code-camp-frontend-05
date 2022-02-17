import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../scr/commons/types/generated/type";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      title
      writer
      contents
      _id
    }
  }
`;
const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;
export default function ApolloCacheStatePage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기 로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        // (기존에 저장 되어있는 내용, 지금 받은 결과 데이터)
        const deletedId = data.deleteBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev, { readField }) => {
              // prev 안에 기존 30개 데이터 존재 => 29개로 변경해야 함
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              // el에서 id가 안되므로 readField 사용
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onclickSubmit = async () => {
    // 등록하기 로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "dudn",
          password: "df",
          title: "wprhd",
          contents: "dfd",
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              return [data.createBoard, ...prev]; // [{writer: "dudn", .....}]
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onclickSubmit}>등록하기</button>
    </div>
  );
}
