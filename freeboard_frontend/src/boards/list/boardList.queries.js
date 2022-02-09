import { gql } from "@apollo/client";

export const FETCH_BOARDS_SEARCH = gql`
  query fetchBoards($search: Sring, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

// const onClickDelete = (event) => {
//   deleteBoard({
//     variables: {
//       boardId: String(event.target.id)

//     },
//     refetchQueries: [{query: FETCH_BOARDS}]

//   })
// }
