import InfiniteScroll from "react-infinite-scroller";
import { DatePicker, Space } from "antd";
import * as List from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IFetchUseditemsPresenter } from "./gql&types";
import LazyLoad from "react-lazyload";
import Slider from "react-slick";

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
          <RangePicker onChange={props.rangePick} />
        </Space>

        <List.SearchBtn onClick={props.onClickSearch}>검색하기</List.SearchBtn>
      </List.Search>

      <List.List>
        <List.topTitle>상품목록</List.topTitle>

        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          <List.Row>
            {props.data?.fetchUseditems
              ?.filter((x) => x.images[0])
              .filter(
                (y) =>
                  Number(props.srchDate[0]) <=
                    Number(y.createdAt.slice(0, 10).replaceAll("-", "")) &&
                  Number(props.srchDate[1]) >=
                    Number(y.createdAt.slice(0, 10).replaceAll("-", ""))
              )
              .map((el: any, index: number) => (
                <List.Column key={index} onClick={props.movePage(el._id)}>
                  <List.Title>
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

                  <List.Title>{el.seller.name}</List.Title>
                  <Slider {...props.settings}>
                    {el.images
                      .filter((x) => x)
                      .map((y) => (
                        <LazyLoad key={uuidv4()} height={500}>
                          <List.SliderItem
                            src={`https://storage.googleapis.com/${y}`}
                            onError={props.onErrorImg}
                          ></List.SliderItem>
                        </LazyLoad>
                      ))}
                  </Slider>
                  <List.Title>{el.createdAt.slice(0, 10)}</List.Title>
                  <List.Title>
                    <List.HeartIcons />

                    <List.Up>{el.pickedCount}</List.Up>
                  </List.Title>
                </List.Column>
              ))}
          </List.Row>
        </InfiniteScroll>

        <List.Button onClick={props.movePage("NEW")}>
          게시물 등록하기
        </List.Button>
      </List.List>
    </>
  );
}
