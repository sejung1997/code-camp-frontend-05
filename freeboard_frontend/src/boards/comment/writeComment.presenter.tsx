import * as C from "./writeComment.styles";
export default function WriteCommentPageUI(props) {
  return (
    <C.CommentArea>
      <C.Title>댓글</C.Title>
      <C.privateInfo>
        <C.Input
          id="writer"
          onChange={props.changeinputs}
          placeholder="작성자"
          value={props.writer}
        />
        <br />
        <C.Input
          id="password"
          onChange={props.changeinputs}
          placeholder="비밀번호"
          value={props.password}
        />
        <br />
        <C.rate onChange={props.handleChange} value={props.value} />
      </C.privateInfo>
      <br />
      <C.contents>
        <C.InputC
          id="contents"
          onChange={props.changeinputs}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
          value={props.contents}
        />
        <C.Hr></C.Hr>
        <C.letter>{props.length}/100</C.letter>
        <C.submitButton onClick={props.createComment}>등록하기</C.submitButton>
      </C.contents>
    </C.CommentArea>
  );
}
