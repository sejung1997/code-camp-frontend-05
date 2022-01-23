import * as C from "./writeComment.styles"
export default function WriteCommentPageUI (props) {
  return(
    <C.CommentArea >
      
      <C.Title>댓글</C.Title>
      <C.privateInfo>
        <C.Input id="writer" onChange={props.changeWriter} placeholder="작성자"/><br/>
        <C.Input id="password" onChange={props.changePassword} placeholder="비밀번호"/><br/>
      </C.privateInfo>
      <br/>
      <C.contents>
        <C.InputC id="contents" onChange={props.changeContents} placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다." maxLength={100}/>
        <C.Hr></C.Hr>
        <C.letter>{props.length}/100</C.letter>
        <C.Button onClick={props.createComment}>등록하기</C.Button>


      </C.contents>

      



      {props.data?.fetchBoardComments.map((el) => (
        <C.Comment key = {el._id}>
          <C.CommentInfo>
            <C.Writer>{el.writer}</C.Writer>
            <C.wrapper>
              <C.buttonUpdate onClick={props.updateComment} id={el.contents}>수정</C.buttonUpdate>
              <C.buttonDelete onClick={props.deleteComment} id={el._id}>삭제</C.buttonDelete>
              <div>
                <input onChange={props.changePs} placeholder="password" />
              </div>
            </C.wrapper>
            
              
          </C.CommentInfo>
          <C.content>{el.contents}</C.content>
            
          <C.date>{(el.createdAt).slice(0,10)}</C.date>
        </C.Comment>


      ))}
      
    </C.CommentArea>
  )
}

