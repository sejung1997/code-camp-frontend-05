import InfiniteScroll from "react-infinite-scroller";
import { DatePicker, Space } from "antd";
import * as List from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IFetchUseditemsPresenter } from "./gql&types";

export default function fetchUseditemsPresenter(
  props: IFetchUseditemsPresenter
) {
  const { RangePicker } = DatePicker;

  return (
    <>
      <List.Search>
        <List.SearchTitle
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearch}
        ></List.SearchTitle>
        <Space direction="vertical" size={12}>
          {/* <RangePicker onChange={props.rangePick} /> */}
        </Space>

        {/* <List.SearchBtn onClick={props.onClickSearch}>검색하기</List.SearchBtn> */}
      </List.Search>
      <List.List>
        <List.TopRow>
          <List.Column>번호</List.Column>
          <List.Column>제목</List.Column>
          <List.Column>작성자</List.Column>
          <List.Column>날짜</List.Column>
        </List.TopRow>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchUseditems
            ?.filter((x) => x.images?.length > 1)
            .map((el: any, index: number) => (
              <List.Row key={el._id}>
                <List.Column>{index + 1}</List.Column>
                <List.Column>
                  <List.Title onClick={props.movePage(el._id)}>
                    {el.name
                      .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                      .split("#$%")
                      .map((el) => (
                        <List.word
                          key={uuidv4()}
                          isMatched={el === props.keyword}
                        >
                          {el}
                        </List.word>
                      ))}
                  </List.Title>
                </List.Column>
                <List.Column>{el.seller.name}</List.Column>
                {el.images
                  .filter((x) => x)
                  .map((x) => (
                    <List.planet key={x}>
                      <List.SliderItem
                        src={`https://storage.googleapis.com/${x}`}
                      ></List.SliderItem>
                    </List.planet>
                  ))}
                <List.images />
                <List.Column>{el.createdAt.slice(0, 10)}</List.Column>
                {/* <Column>{el.contents}</Column> */}
              </List.Row>
            ))}
        </InfiniteScroll>

        <List.Button onClick={props.movePage("NEW")}>
          게시물 등록하기
        </List.Button>
      </List.List>
    </>
  );
}
