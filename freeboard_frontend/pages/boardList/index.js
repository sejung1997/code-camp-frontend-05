
import styled from "@emotion/styled/"
import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql ` 

  query fetchBoards{
    fetchBoards{
      _id
      writer
      title
      contents
    }
  }

`
const DELETE_BOARD = gql `

  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) {
      ID
    }
  }

`
const Column = styled.div`
  width: 20%;

`
const Row = styled.div`
  display: flex;
`


export default function boardListPage() {
  const { data: a } = useQuery(FETCH_BOARDS)

  const [deleteBoard] = useMutation(DELETE_BOARD)


  const onClickDelete = (event) => {
    console.log(event.target.id)
  }
  return (
    <div>
      {a?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column><input type="checkbox"/></Column>
          <Column>{el._id}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <Column><button id={el._id} onClick={onClickDelete}>삭제</button></Column>
        </Row>
      ))}
    </div>
  )
}