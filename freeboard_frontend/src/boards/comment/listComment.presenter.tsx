import * as C from "./listComment.styles";
import InfiniteScroll from "react-infinite-scroller";

import { Modal } from "antd";

export default function ListCommentPageUI(props) {
  return (
    <div>
      {props.isVisible && (
        <Modal
          visible={true}
          onOk={props.checkDelete}
          onCancel={props.clickCancle}
        >
          <input
            title="비밀번호를 입력해주세요"
            type="password"
            onChange={props.changePs}
            placeholder="password"
          />
        </Modal>
      )}
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <C.Comment key={el._id}>
            <C.CommentInfo>
              <C.Img src="/images/Vector.png"></C.Img>

              <C.Writer>
                {el.writer} <C.rate value={el.rating} />
              </C.Writer>
              <C.wrapper>
                <C.buttonUpdate
                  src="/images/edit.png"
                  onClick={props.updateComment}
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
        ))}
      </InfiniteScroll>
    </div>
  );
}
