import * as P from "./pagination01.styles";
import { IPaginationUI } from "./pagination01.types";

export default function Pagination01UI(props: IPaginationUI) {
  return (
    <P.Page>
      <P.PagePrev onClick={props.onClickPrevPage}>{`${
        props.curPage > 10 ? "이전페이지" : ""
      }`}</P.PagePrev>

      {new Array(10).fill(1).map(
        (_, index) =>
          index + props.startPage <= props.lastPage && (
            <P.Span
              style={{ cursor: "pointer" }}
              className={`${index + props.startPage}`}
              onClick={props.onclickPage}
              id={String(index + props.startPage)}
              key={index + props.startPage}
              isActive={props.startPage + index === props.curPage}
            >
              {index + props.startPage}
            </P.Span>
          )
      )}
      <P.PageNext onClick={props.onClickNextPage}>
        {`${
          props.startPage / 10 < Math.floor(props.lastPage / 10)
            ? "다음페이지"
            : ""
        }`}
      </P.PageNext>
    </P.Page>
  );
}
