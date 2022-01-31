import * as C from "../listComment.styles";

export default function CommentEditPage(props) {
  return (
    <div>
      {props.isEdits[props.index] === false && (
        <C.Comment>
          <C.CommentInfo>
            <C.Img src="/images/Vector.png"></C.Img>
            <C.Writer>
              {props.el.writer} <C.rate value={props.el.rating} disabled />
            </C.Writer>
            <C.wrapper>
              <C.buttonUpdate
                src="/images/edit.png"
                onClick={props.onUpdate}
              ></C.buttonUpdate>

              <C.buttonDelete
                src="/images/x.png"
                onClick={props.onDelte}
                id={props.el._id}
              ></C.buttonDelete>
            </C.wrapper>
          </C.CommentInfo>
          <C.content>{props.el.contents}</C.content>
          <C.date>{props.el.createdAt.slice(0, 10)}</C.date>
        </C.Comment>
      )}

      {props.isEdits[props.index] === true && (
        <C.Comment>
          <C.privateInfo>
            <C.Input
              id="writer"
              placeholder="작성자"
              defaultValue={props.el.writer}
              readOnly
            />
            <br />
            <C.Input
              id="password"
              onChange={props.onchangeInput}
              placeholder="비밀번호"
            />
            <br />
            <C.rate
              onChange={props.onchangeRate}
              defaultValue={props.el.rating}
            />
          </C.privateInfo>
          <br />
          <C.contents>
            <C.InputC
              id="contents"
              onChange={props.onchangeInput}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              maxLength={100}
              defaultValue={props.el.contents}
              value={props.contents}
            />
            <C.Hr></C.Hr>
            <C.letter>{props.length}/100</C.letter>
            <C.submitButton onClick={props.updateComment} id={props.el._id}>
              수정하기
            </C.submitButton>
            <C.cancelButton id={props.index} onClick={props.cancel}>
              취소하기
            </C.cancelButton>
          </C.contents>
        </C.Comment>
      )}
    </div>
  );
}
