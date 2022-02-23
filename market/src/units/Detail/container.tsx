import FetchItemPresenter from "./presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./gql&types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect } from "react";
import { useMovePage } from "../../commons/function/movePage";
import { message } from "antd";
declare const window: typeof globalThis & {
  kakao: any;
};
export default function FetchItemContainer() {
  const movePage = useMovePage();
  const { userInfo, date, setTodayProduct } = useContext(GlobalContext);
  const router = useRouter();
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });
  // const data = new Promise((resolve, reject) => {
  //   const resultUserInfo = client.query({
  //     query: FETCH_USED_ITEM,
  //     variables: { useditemId: String(router.query.id) },
  //   });
  //   console.log(resultUserInfo);
  //   resolve(resultUserInfo);
  // })
  // .then((res) => setTodayData())
  // .then((res) => setTodayProduct(JSON.parse(localStorage.getItem(date))));
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

  const setTodayData = () => {
    const todayData = {
      id: data?.fetchUseditem?._id,
      name: data?.fetchUseditem?.name,
      price: data?.fetchUseditem?.price,
      images: data?.fetchUseditem?.images.filter((x) => x),
    };
    const todaySeen = JSON.parse(localStorage.getItem(date) || "[]");
    if (todaySeen[todaySeen.length - 1]?.id !== todayData.id)
      todaySeen.push(todayData);
    localStorage.setItem(date, JSON.stringify(todaySeen));
  };

  useEffect(() => {
    window.kakao?.maps.load(function () {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);
    });
  }, []);

  const pickUp = () => {
    const todayData = {
      id: data?.fetchUseditem?._id,
      name: data?.fetchUseditem?.name,
      price: data?.fetchUseditem?.price,
      images: data?.fetchUseditem?.images.filter((x) => x),
    };
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
