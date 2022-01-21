import {gql} from "@apollo/client"

export const FETCH_BOARDS = gql ` 

  query fetchBoards{
    fetchBoards{
      _id
      writer
      title
      createdAt
    }
  }

`

export const DELETE_BOARD = gql `

  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) 
  }

`

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        boardId: String(event.target.id)
        
      
      },
      refetchQueries: [{query: FETCH_BOARDS}]

    })
  }
