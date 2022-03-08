import * as C from "../CommentEdit/CommentEdit.styles";
import CreateCommentReply from "../createCommentReply/createCommentReply.container";
export default function CommnetReplyPresenter(props) {
  return (
    <>
      {props.isEdit ? (
        <CreateCommentReply
          el={props.el}
          index={props.index}
          onToggle={props.onToggle}
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          questionId={props.questionId}
        />
      ) : (
        <C.replyWrapper>
          <C.replyCommentInfo>
            <C.Img
              src={
                props.el?.user.picture
                  ? `https://storage.googleapis.com/${props.el?.user.picture}`
                  : "/images/Vector.png"
              }
            ></C.Img>
            <C.Writer>{props.el.user.name}</C.Writer>
            <C.wrapper>
              <C.buttonUpdate
                src="/images/edit.png"
                onClick={props.onToggle}
              ></C.buttonUpdate>

              <C.buttonDelete
                src="/images/x.png"
                onClick={props.checkDeleteAnswer}
              ></C.buttonDelete>
            </C.wrapper>
          </C.replyCommentInfo>
          <C.content>{props.el.contents}</C.content>
          <C.buttonReplyReply onClick={() => props.onToggle("answer")}>
            답글달기
          </C.buttonReplyReply>
          <C.date>{props.el.createdAt?.slice(0, 10)}</C.date>
        </C.replyWrapper>
      )}
    </>
  );
}
