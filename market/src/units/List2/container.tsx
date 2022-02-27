import { useQuery } from "@apollo/client";
import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
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
  const [imgUrl, setImgUrl] = useState(["","" ]);
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

  useEffect(() => {
    console.log(Math.ceil(Math.random() * 10) )

  })
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
  console.log(data);
  {data?.fetchUseditems.filter((x) => x.images[0]).map((el: any, index: number) => (


  ))}

  console.log(data);
  return (
    <FetchUseditemsPresenter
      data={data}
      movePage={movePage}
      onLoadMore={onLoadMore}
      onChangeSearch={onChangeSearch}
      imgUrl={imgUrl}
    />
  );
}
