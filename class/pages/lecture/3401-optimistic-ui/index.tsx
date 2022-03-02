import { useMutation, gql, useQuery } from "@apollo/client";

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6219c65a155b2d0029673120" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);
  const onClickOptimisticUI = () => {
    likeBoard({
      variables: {
        boardId: "6219c65a155b2d0029673120",
      },
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6219c65a155b2d0029673120" },
      //   },
      // ],
      optimisticResponse: {
        likeBoard: (data?.fetchBoard?.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "6219c65a155b2d0029673120" },
          data: {
            fetchBoard: {
              _id: "6219c65a155b2d0029673120",
              likeCount: data?.likeBoard,
              __typename: "Board",
            },
          },
        });
      },
    });
  };
  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재 좋아요 카운트: {data?.fetchBoard?.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기</button>
    </div>
  );
}
