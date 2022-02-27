import InfiniteScroll from "react-infinite-scroller";
import { DatePicker, Space } from "antd";
import * as List from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IFetchUseditemsPresenter } from "./gql&types";

export default function fetchUseditemsPresenter(
  props: IFetchUseditemsPresenter
) {
  return (
    <>
      <List.List>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          <List.Row key={el._id}>
            <List.Column>
              <List.Title>{el.name}</List.Title>
              <List.SliderItem
                src={`https://storage.googleapis.com/${props.imgUrl[0]}`}
              />
            </List.Column>

            <List.Column>
              <List.Title>{el.name}</List.Title>
              <List.SliderItem
                src={`https://storage.googleapis.com/${props.imgUrl[1]}`}
              />
            </List.Column>
          </List.Row>
        </InfiniteScroll>

        <List.Button onClick={props.movePage("NEW")}>
          게시물 등록하기
        </List.Button>
      </List.List>
    </>
  );
}
