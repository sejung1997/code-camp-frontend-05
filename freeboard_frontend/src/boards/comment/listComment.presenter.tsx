import InfiniteScroll from "react-infinite-scroller";
import CommentEdit from "./CommentEdit/CommentEdit.container";

export default function ListCommentPageUI(props) {
  if (!props.data) return <div />;
  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments?.map((el, index) => (
          <CommentEdit key={el._id} el={el} index={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
