import BoardListPageUI from "./boardList.presenter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARDS } from "./boardList.gql";
import { message } from "antd";

export default function boardWriteContainer() {
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
  const { data, refetch, fetchMore } = useQuery(FETCH_BOARDS, {
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

  return (
    <BoardListPageUI
      onLoadMore={onLoadMore}
      settings={settings}
      data={data}
      refetch={refetch}
    />
  );
}
