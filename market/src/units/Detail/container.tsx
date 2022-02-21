import FetchItemPresenter from "./presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./gql&types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect } from "react";
import { useMovePage } from "../../commons/function/movePage";
import { message } from "antd";
export default function FetchItemContainer() {
  const movePage = useMovePage();
  const { userInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });
  const deleteBtn = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.id) },
      });
      message.info("삭제에 성공했습니다");
    } catch (error) {
      message.info(error.message);
    }
  };
  // interface IData {
  //   seller?: unknown;
  //   product?: unknown;
  //   price?: unknown;
  // }
  const todayData = {
    id: data?.fetchUseditem?._id,
    seller: data?.fetchUseditem?.seller.name,
    name: data?.fetchUseditem?.name,
    price: data?.fetchUseditem?.price,
  };
  const date = String(new Date()).slice(0, 10);
  console.log(date);
  useEffect(() => {
    if (!data) return;
    const todaySeen = JSON.parse(localStorage.getItem(date) || "[]");
    if (todaySeen[todaySeen.length - 1]?.id !== todayData.id)
      todaySeen.push(todayData);
    localStorage.setItem(date, JSON.stringify(todaySeen));
  }, [data]);
  const pickUp = () => {
    const pickUpData = JSON.parse(localStorage.getItem("baskets") || "[]");
    if (pickUpData[pickUpData.length - 1]?.id !== todayData.id)
      pickUpData.push(todayData);
    localStorage.setItem("baskets", JSON.stringify(pickUpData));
    message.info("장바구니에 담기 완료");
  };
  return (
    <FetchItemPresenter
      data={data}
      userInfo={userInfo}
      movePage={movePage}
      router={router}
      deleteBtn={deleteBtn}
      pickUp={pickUp}
    />
  );
}
