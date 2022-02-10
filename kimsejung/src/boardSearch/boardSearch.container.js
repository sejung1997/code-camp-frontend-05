import BoardSearchPageUI from "./boardSearch.presenter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARDS_SEARCH } from "./boardSearch.gql";
import { message } from "antd";

export default function boardWriteContainer() {
  const [keyword, setKeyword] = useState("");
  const [isHide, setIsHide] = useState(true);

  const toggle = () => {
    setIsHide((prev) => !prev);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
  };
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS_SEARCH, {
    variables: { page: 1 },
  });
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const clickSearch = () => {
    refetch({ page: 1, search: keyword });
  };
  const onChangeSearch = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <BoardSearchPageUI
      onLoadMore={onLoadMore}
      settings={settings}
      data={data}
      refetch={refetch}
      clickSearch={clickSearch}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      toggle={toggle}
      isHide={isHide}
    />
  );
}
