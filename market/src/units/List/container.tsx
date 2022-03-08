import { useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMovePage } from "../../commons/function/movePage";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "./gql&types";
import FetchUseditemsPresenter from "./presenter";

export default function fetchUseditemsContainer() {
  const [keyword, setKeyword] = useState("");
  const [srchDate, setSrchDate] = useState<number[]>([20220000, 20230000]);
  const movePage = useMovePage();

  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { page: 1 },
  });

  const getDebounce = _.debounce((keyData) => {
    setKeyword(keyData);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickSearch = () => {
    refetch({ search: keyword });
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  // useEffect(() => {
  //   refetch({ search: keyword });
  // }, [srchDate]);
  const rangePick = (da) => {
    setSrchDate([
      Number(JSON.stringify(da[0]._d).slice(1, 11)?.replaceAll("-", "")),
      Number(JSON.stringify(da[1]._d).slice(1, 11)?.replaceAll("-", "")),
    ]);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,

    arrows: false,
    cssEase: "linear",
  };
  return (
    <FetchUseditemsPresenter
      data={data}
      movePage={movePage}
      onLoadMore={onLoadMore}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
      rangePick={rangePick}
      srchDate={srchDate}
      onClickSearch={onClickSearch}
      settings={settings}
    />
  );
}
