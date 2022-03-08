import * as C from "./createCommentReply.styles";

export default function createCommentPresenter(props) {
  return (
    <>
      <C.CommentArea isEdit={props.isAnswer}>
        <C.Title isEdit={props.isAnswer}>
          <C.Image
            src={
              props.el?.user.picture
                ? `https://storage.googleapis.com/${props.el?.user.picture}`
                : "/images/Vector.png"
            }
          />
          {props.isEdit ? "답글 수정" : "답글 달기"}
        </C.Title>

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

          <C.cancelButton onClick={() => props.onToggle("answer")}>
            취소하기
          </C.cancelButton>
        </C.contents>
      </C.CommentArea>
    </>
  );
}
