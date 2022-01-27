  import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1);

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 > props.lastPage) return;
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  const onclickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
  };
  return (
    <div>
      <span onClick={onClickPrevPage}>이전페이지</span>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= props.lastPage && (
            <span
              onClick={onclickPage}
              id={String(index + startPage)}
              key={index + startPage}
            >
              {`${index + startPage}`}
            </span>
          )
      )}
      <span onClick={onClickNextPage}>다음페이지</span>
    </div>
  );
}
