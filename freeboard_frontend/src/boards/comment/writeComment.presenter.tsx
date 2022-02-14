import { printIntrospectionSchema } from "graphql";
import * as C from "./writeComment.styles";
export default function WriteCommentPageUI(props) {
  console.log(props.isEdit);
  return (
    <C.CommentArea isEdit={props.isEdit}>
      <C.Title isEdit={props.isEdit}>댓글</C.Title>
      <C.privateInfo>
        <C.Input
          id="writer"
          onChange={props.changeinputs}
          placeholder="작성자"
          defaultValue={props.el?.writer ? props.el.writer : ""}
          readOnly={props.isEdit}
        />
        <br />
        <C.Input
          id="password"
          onChange={props.changeinputs}
          placeholder="비밀번호"
        />
        <br />
        <C.rate
          onChange={props.handleChange}
          defaultValue={props.el?.rating ? props.el.rating : props.value}
        />
      </C.privateInfo>
      <br />
      <C.contents>
        <C.InputC
          id="contents"
          onChange={props.changeinputs}
          defaultValue={props.isEdit ? props.el.contents : ""}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          maxLength={100}
        />
        <C.Hr></C.Hr>
        <C.letter>{props.length}/100</C.letter>
        <C.submitButton
          onClick={props.isEdit ? props.update : props.createComment}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </C.submitButton>
        <C.cancelButton
          isEdit={props.isEdit === true}
          el={props.el}
          onClick={props.cancel}
        >
          {props.isEdit === true ? "취소하기" : "sdfsdfdddddddddddddd"}
        </C.cancelButton>
      </C.contents>
    </C.CommentArea>
  );
}
