import InfiniteScroll from "react-infinite-scroller";
import CommentEdit from "./CommentEdit/CommentEdit.container";

export default function ListCommentPageUI(props) {
  return (
    <div>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el, index) => (
          <CommentEdit key={el.id} el={el} index={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
}
