import {gql, useQuery} from '@apollo/client'
import styled from "@emotion/styled"
import { colors } from '@material-ui/core'

const FETCH_BOARDS = gql `

  query fetchBoards{
    fetchBoards{
      number
      writer
      title
      createdAt
    }
  }

`
const Column = styled.div`
  width: 20%;

`
const Row = styled.div`
  display: flex;
`

export default function MapCheckboxPage () {

  const { data: a } = useQuery(FETCH_BOARDS)

  //data: state 중 하나이다. 바뀌면 다시 레더링된다
  //useQuery 비동기로작동
  

  return (
    <div>
      {a?.fetchBoards.map((el) => (
        <Row>
          <Column><input type="checkbox" /></Column>
          <Column>{el.nuber}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.createdAt}</Column>
        </Row>
      ))}
    </div>
  )
}