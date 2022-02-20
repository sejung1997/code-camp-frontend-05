import * as C from "./createComment.styles";

export default function createCommentPresenter(props) {
  return (
    <>
      <C.CommentArea isEdit={props.isEdit}>
        <C.Title isEdit={props.isEdit}>댓글</C.Title>

        <C.contents>
          <C.InputC
            onChange={props.changeinputs}
            defaultValue={props.isEdit ? props.el.contents : ""}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            maxLength={100}
          />
          <C.Hr></C.Hr>
          <C.letter>{props.inputs?.length}/100</C.letter>

          <C.submitButton
            onClick={props.isEdit ? props.update : props.createComment}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </C.submitButton>

          <C.cancelButton
            isEdit={props.isEdit === true}
            el={props.el}
            onClick={() => props.onToggle("edit")}
          >
            {props.isEdit === true ? "취소하기" : ""}
          </C.cancelButton>
        </C.contents>
      </C.CommentArea>
    </>
  );
}
