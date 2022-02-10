import * as li from "./boardList.styles";
import InfiniteScroll from "react-infinite-scroller";

import Slider from "react-slick";
import BoardDetailPage from "../boardDetail/boardDetail.container";

export default function BoardListPageU(props) {
  return (
    <li.Main>
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
          {props.data?.fetchBoards?.map((el, index) => (
            <BoardDetailPage
              key={el.id}
              refetch={props.refetch}
              el={el}
              index={index}
            />
          ))}
        </InfiniteScroll>
      </li.wrapper>
    </li.Main>
  );
}
