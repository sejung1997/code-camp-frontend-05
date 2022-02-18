import { useState, useEffect } from "react";
import { IBoard } from "../../../scr/commons/types/generated/type";

export default function BasketLoggedInPage() {
  const [basketItems, setBasketItems] = useState([]);
  // if (typeof window !== "undefined") {}
  // if(process.browser)
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);
  return (
    <div>
      <h1>장바구니(비회원)</h1>
      {basketItems.map((el: IBoard) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
