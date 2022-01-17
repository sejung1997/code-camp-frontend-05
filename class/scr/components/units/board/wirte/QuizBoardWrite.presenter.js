import * as a from "./QuizBoardWrite.styles"


export default function BoardWriteUI(props) {


  return (
    <>
      게시판 등록 <br/><br/>
      이름<br/><a.Input placeholder="이름을 입력하세요" onChange={props.move1}></a.Input><br/>
      비밀번호<br/><a.Input placeholder="비밀번호를 입력하세요" onChange={props.move2}></a.Input><br/>
      제목<br/><a.Input placeholder="제목을 입력하세요" onChange={props.move3}></a.Input><br/>
      내용<br/><a.Input placeholder="내용을 입력하세요" onChange={props.move4}></a.Input><br/><br/>
      <a.Button onClick={props.move100} ggg={props.isActive}>제출하기</a.Button>
      

    </>
  )
}