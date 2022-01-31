import * as C from "../listComment.styles";

export default function CommentEditPage(props) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el, index) => (
        <div key={el._id}>
          {props.isEdits[index] === false && (
            <C.Comment>
              <C.CommentInfo>
                <C.Img src="/images/Vector.png"></C.Img>
                <C.Writer>
                  {el.writer} <C.rate value={el.rating} disabled />
                </C.Writer>
                <C.wrapper>
                  <C.buttonUpdate
                    src="/images/edit.png"
                    id={index}
                    key={el._id}
                    onClick={props.onUpdate}
                  ></C.buttonUpdate>

                  <C.buttonDelete
                    src="/images/x.png"
                    onClick={props.clickupdate}
                    id={el._id}
                  ></C.buttonDelete>
                </C.wrapper>
              </C.CommentInfo>
              <C.content>{el.contents}</C.content>
              <C.date>{el.createdAt.slice(0, 10)}</C.date>
            </C.Comment>
          )}
          {props.isEdits[index] === true && (
            <C.Comment>
              <C.privateInfo>
                <C.Input
                  id="writer"
                  placeholder="작성자"
                  defaultValue={el.writer}
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
                  defaultValue={el.rating}
                />
              </C.privateInfo>
              <br />
              <C.contents>
                <C.InputC
                  id="contents"
                  onChange={props.onchangeInput}
                  placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                  maxLength={100}
                  defaultValue={el.contents}
                  value={props.contents}
                />
                <C.Hr></C.Hr>
                <C.letter>{props.length}/100</C.letter>
                <C.submitButton onClick={props.updateComment} id={el._id}>
                  수정하기
                </C.submitButton>
                <C.cancelButton id={index} onClick={props.cancel}>
                  취소하기
                </C.cancelButton>
              </C.contents>
            </C.Comment>
          )}
        </div>
      ))}
    </div>
  );
}
