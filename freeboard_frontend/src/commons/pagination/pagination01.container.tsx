import { useState } from "react";
import { IPagination01 } from "./pagination01.types";
import Pagination01UI from "./pagination01.presenter";

export default function Pagination01(props: IPagination01) {
  const [startPage, setStartPage] = useState(1);
  const [curPage, setCurPage] = useState(1);

  const lastPage = Math.ceil(props.count / 10);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    setCurPage(startPage - 10);
    props.refetch({ page: curPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
    setCurPage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };

  const onclickPage = (event) => {
    console.log(event.target.id);
    // const curPage = Number(event.target.id);
    setCurPage(Number(event.target.id));
    props.refetch({ page: Number(event.target.id) });
  };

  return (
    <Pagination01UI
      startPage={startPage}
      curPage={curPage}
      lastPage={lastPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      onclickPage={onclickPage}
    />
  );
}
