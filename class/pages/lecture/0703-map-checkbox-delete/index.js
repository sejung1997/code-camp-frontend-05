import {gql, useMutation, useQuery} from '@apollo/client'
import styled from "@emotion/styled"

const FETCH_BOARDS = gql `

  query fetchBoards{
    fetchBoards{
      number
      writer
      title
      contents
    }
  }

`
const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }

`
const Column = styled.div`
  width: 20%;

`
const Row = styled.div`
  display: flex;
`

export default function MapCheckboxDeletePage () {
  
  const [deleteBoard] = useMutation(DELETE_BOARD)

  const { data: a } = useQuery(FETCH_BOARDS)

  //data: state 중 하나이다. 바뀌면 다시 레더링된다
  //useQuery 비동기로작동








  
  const onClickDelete = (event) => {
    //event.target.number
    deleteBoard({
      variables: {
        number: Number(event.target.number)
        
      
         

     },
     refetchQueries: [{query: FETCH_BOARDS}] // variables:
   })
    
  }


  return (  
    <div>
      {a?.fetchBoards.map((el,index) => (
        
        <Row key={el.number}>
           {/* key: index 넣으면안됨 */}
          <Column><input type="checkbox" /></Column>
          <Column>{el.number}</Column>
          <Column>{el.title}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.contents}</Column>
          <Column><button id={el.number} onClick={onClickDelete}>삭제</button></Column>

        </Row>
      ))}
    </div>
  )
}