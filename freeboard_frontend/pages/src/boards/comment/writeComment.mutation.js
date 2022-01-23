import {gql} from "@apollo/client"

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($createBoardCommentInput:CreateBoardCommentInput!, $boardId: ID! ) {
    createBoardComment(createBoardCommentInput:$createBoardCommentInput, boardId: $boardId ) {
      writer
      contents
      _id
    }
  }
`
export const FETCH_BOARD_COMMENT = gql`
  query fetchBoardComments( $page: Int, $boardId: ID!) {
    fetchBoardComments( page: $page, boardId: $boardId) {
      writer
      contents
      rating
      createdAt
      _id

    }
      
  }
`
export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment( $password: String, $boardCommentId: ID!) {
    deleteBoardComment( password: $password, boardCommentId: $boardCommentId ) 
  }
`
// export const UPDATE_BOARD_COMMENTS