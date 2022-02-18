import { gql, useQuery } from "@apollo/client";
import {
  IBoard,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../scr/commons/types/generated/type";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      title
      writer

      _id
    }
  }
`;
const onClickBasket = (el: IBoard) => () => {
  console.log(el);
  // delete el.__typename;
  const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
  if (temp.length === 1) return alert("이미 담으셨습니다");
  const { __typename, ...newEl } = el;
  baskets.push(newEl);
  localStorage.setItem("basket", JSON.stringify(baskets));
};
export default function BasketPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardArgs>(
    FETCH_BOARDS
  );
  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </div>
      ))}
    </div>
  );
}
