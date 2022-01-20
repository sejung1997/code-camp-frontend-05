
import styled from "@emotion/styled/"
import { gql, useMutation, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql ` 

  query fetchBoards{
    fetchBoards{
      _id
      writer
      title
      createdAt
    }
  }

`
const DELETE_BOARD = gql `

  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId) 
  }

`
const Column = styled.div`
  width: 200px;
  text-align: center;

`
const Row = styled.div`
  display: flex;
`
const TopRow = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
`
const List = styled.div`
padding 30px
`


export default function boardListPage() {
  const { data: a } = useQuery(FETCH_BOARDS)

  const [deleteBoard] = useMutation(DELETE_BOARD)


  const onClickDelete = (event) => {
      deleteBoard({
        variables: {
          boardId: String(event.target.id)
          
         
        },
        refetchQueries: [{query: FETCH_BOARDS}]
 
      })
  }
  // const isCheck = false
  // const checkbox = document.getElementById("checkbox")
  const clickAll = () => {
    document.getElementById('#checkbox')
    

  } 
  const getMyDate = (myDate) => {
    const aaa = new Date(myDate)


    const year = aaa.getFullYear()
    const month = aaa.getMonth() + 1
    const date = aaa.getDate()
    return `${year}-${month}-${date}`
    aaa.getDay()

  }
  
  
  




  return (
    <div>

      <List>
        <TopRow>
          <Column><input type="checkbox" onClick={clickAll}/></Column><Column>번호</Column><Column>제목</Column><Column>작성자</Column> <Column>작성일</Column>
        </TopRow>
        
        {a?.fetchBoards.map((el, index) => (
          <Row key={el._id}>
            
            <Column><input type="checkbox" id="checkbox" /></Column>
            <Column>{index + 1}</Column>
            <Column>{el.title}</Column>
            <Column>{el.writer}</Column>
            <Column>{(el.createdAt).slice(0,10)}</Column>
            {/* <Column>{el.contents}</Column> */}
            <Column><button id={el._id} onClick={onClickDelete}>삭제</button></Column>
          </Row>
        ))}
      </List>
      
    </div>
  )
}