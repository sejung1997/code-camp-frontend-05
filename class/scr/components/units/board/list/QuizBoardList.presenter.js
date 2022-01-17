import {Board} from "./QuizBoardList.styles"

export default function BoardList(props) {
  return (
    <>
      <Board> 작성자: {props.Data?.fetchBoard.writer}</Board>
      <Board> 제목: {props.Data?.fetchBoard.title}</Board>
      <Board> 내용: {props.Data?.fetchBoard.contents}</Board>
    </>
      
  )
}


      