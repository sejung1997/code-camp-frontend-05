import * as C from "../CommentEdit/CommentEdit.styles";
import { Modal } from "antd";
import CreateCommentContainer from "../createComment.container";
import CreateCommentReply from "../createCommentReply/createCommentReply.container";
import CommnetReplyContainer from "../commentReply/reply.container";
export default function CommentEditPage(props) {
  return (
    <div>
      {props.isEdit === false && (
        <>
          <C.Comment>
            <C.CommentInfo>
              <C.Img src="/images/Vector.png"></C.Img>
              <C.Writer>{props.el.user.name}</C.Writer>
              <C.wrapper>
                <C.buttonUpdate
                  src="/images/edit.png"
                  onClick={() => props.onToggle("edit")}
                ></C.buttonUpdate>

                <C.buttonDelete
                  src="/images/x.png"
                  onClick={props.checkDelete}
                ></C.buttonDelete>
              </C.wrapper>
            </C.CommentInfo>
            <C.content>
              {props.el.contents ? props.el.contents : "내용이 없습니다"}
            </C.content>
            <C.buttonReply onClick={() => props.onToggle("answer")}>
              답글달기
            </C.buttonReply>
            <C.date>{props.el.createdAt.slice(0, 10)}</C.date>
          </C.Comment>

          {props.answerData?.fetchUseditemQuestionAnswers &&
            props.answerData?.fetchUseditemQuestionAnswers?.map((el, index) => (
              <CommnetReplyContainer
                key={el._id}
                index={index}
                el={el}
                questionId={props.el._id}
                checkDeleteAnswer={props.checkDeleteAnswer}
              />
            ))}
        </>
      )}

      {props.isEdit === true && (
        <CreateCommentContainer
          isEdit={props.isEdit}
          setIsEdit={props.setIsEdit}
          el={props.el}
          onToggle={props.onToggle}
        />
      )}
      {props.isAnswer === true && (
        <CreateCommentReply
          questionId={props.el._id}
          onToggle={props.onToggle}
          setIsEdit={props.setIsEdit}
        />
      )}
    </div>
  );
}
