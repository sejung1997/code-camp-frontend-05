// import InfiniteScroll from "react-infinite-scroller";
import CommentEdit from "./CommentEdit/CommentEdit.container";
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
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
      ></InfiniteScroll> */}
      {props.data?.fetchBoardComments.map((el, index) => (
        <CommentEdit key={el.id} el={el} index={index} />
      ))}

      {/* data={props.data}
          changePs={props.changePs}
          isVisible={props.isVisible}
          checkDelete={props.checkDelete}
          clickupdate={props.clickupdate}
          clickCancle={props.clickCancle}
          onLoadMore={props.onLoadMore}
           length={props.length} */}
    </div>
  );
}
