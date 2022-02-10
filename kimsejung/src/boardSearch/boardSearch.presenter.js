import * as li from "./boardSearch.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

import Slider from "react-slick";
import BoardDetailPage from "../boardDetail/boardDetail.container";

export default function BoardListPageU(props) {
  return (
    <li.Main>
      <li.WrapperS>
        <li.Search placeholder="키워드 검색" onChange={props.onChangeSearch} />
        <li.BtnSearch onClick={props.clickSearch}>Q</li.BtnSearch>
      </li.WrapperS>

      <li.wrapperSlide>
        <Slider {...props.settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <li.planet key={x}>
              <li.SliderItem src={`images/planet${x}.png`}></li.SliderItem>
            </li.planet>
          ))}
        </Slider>
      </li.wrapperSlide>

      <li.wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
        >
          {props.data?.fetchBoards?.map((el) => (
            <li.wrapperList key={el._id}>
              <li.header>
                <li.toggleBtn>{props.isHide ? ">" : "v"}</li.toggleBtn>{" "}
                <li.title onClick={props.toggle}>
                  {el?.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((el) => (
                      <li.Word key={uuidv4()} isMatched={el === props.keyword}>
                        {el}
                      </li.Word>
                    ))}
                </li.title>
                <li.date>{el?.createdAt}</li.date>
                <br />
              </li.header>
              <li.detail isHide={props.isHide}>
                <li.contents>{el?.contents}</li.contents>
                <li.imgBox>
                  <li.img01
                    imgUrl={el?.images[0]}
                    src={`https://storage.googleapis.com/${el?.images[0]}`}
                  />
                  <li.img01
                    imgUrl={props.el?.images[1]}
                    src={`https://storage.googleapis.com/${el?.images[1]}`}
                  />
                  <li.img01
                    imgUrl={props.el?.images[2]}
                    src={`https://storage.googleapis.com/${el?.images[2]}`}
                  />
                </li.imgBox>
                <li.btnGroup>
                  <li.btnDelete onClick={props.clickDelete}>삭제</li.btnDelete>
                  <li.btnUpdate onClick={props.clickVisible}>수정</li.btnUpdate>
                </li.btnGroup>
              </li.detail>
            </li.wrapperList>
          ))}
        </InfiniteScroll>
      </li.wrapper>
    </li.Main>
  );
}
