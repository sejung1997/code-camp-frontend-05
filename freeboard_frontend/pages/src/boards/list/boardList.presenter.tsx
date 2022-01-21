import { Button } from '../../../../styles/board'
import * as B from './boardList.styles'

export default function boardListPageUI(props) {




  return (
    
    <>
      <B.List>
        <B.TopRow>
         <B.Column>번호</B.Column><B.Column>제목</B.Column><B.Column>작성자</B.Column> <B.Column>날짜</B.Column>
        </B.TopRow>
        
        {props.a?.fetchBoards.map((el, index) => (
          <B.Row key={el._id}>
            
            <B.Column>{index + 1}</B.Column>
            <B.Column>{el.title}</B.Column>
            <B.Column>{el.writer}</B.Column>
            <B.Column>{(el.createdAt).slice(0,10)}</B.Column>
            {/* <Column>{el.contents}</Column> */}
          </B.Row>
        ))}
      </B.List>
      <Button onClick={props.register}>게시물 등록하기</Button>
    </>
    
      
   
  )
}