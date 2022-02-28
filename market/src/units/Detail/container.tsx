import FetchItemPresenter from "./presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM, ITEM_PICK } from "./gql&types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect } from "react";
import { useMovePage } from "../../commons/function/movePage";
import { message } from "antd";
import { KakaoMapPage } from "../../commons/kakaoMap/index";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../commons/types/generated/types";

export default function FetchItemContainer() {
  // const client = useApolloClient();

  const movePage = useMovePage();

  const { userInfo, date, setTodayProduct } = useContext(GlobalContext);

  const router = useRouter();
  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const [toggleUseditemPick] = useMutation(ITEM_PICK);

  const setKaokaoMap = KakaoMapPage();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  const todayData = {
    id: data?.fetchUseditem?._id,
    name: data?.fetchUseditem?.name,
    price: data?.fetchUseditem?.price,
    images: data?.fetchUseditem?.images.filter((x: any) => x),
  };
  useEffect(() => {
    if (!data) return;

    // if (JSON.parse(localStorage.getItem(date))) return;

    const todaySeen = JSON.parse(localStorage.getItem(date) || "[]");
    if (todaySeen[todaySeen.length - 1]?.id === todayData.id) return;
    todaySeen.push(todayData);
    localStorage.setItem(date, JSON.stringify(todaySeen));

    setTodayProduct(JSON.parse(localStorage.getItem(date)));
  }, [data]);

  // const data = new Promise((resolve, reject) => {
  //   const resultUserInfo = client.query({
  //     query: FETCH_USED_ITEM,
  //     constiables: { useditemId: String(router.query.id) },
  //   });
  //   console.log(resultUserInfo);
  //   resolve(resultUserInfo);
  // })

  //   .then((res) => setTodayData())
  //   .then((res) => setTodayProduct(JSON.parse(localStorage.getItem(date))));

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

  useEffect(() => {
    setKaokaoMap(data);
  }, [data]);

  const pickUp = () => {
    const todayData = {
      id: data?.fetchUseditem?._id,
      name: data?.fetchUseditem?.name,
      price: data?.fetchUseditem?.price,
      images: data?.fetchUseditem?.images.filter((x: any) => x),
      seller: data?.fetchUseditem?.seller.name,
    };
    const pickUpData = JSON.parse(localStorage.getItem("baskets") || "[]");
    if (pickUpData[pickUpData.length - 1]?.id !== todayData.id)
      pickUpData.push(todayData);
    localStorage.setItem("baskets", JSON.stringify(pickUpData));
    message.info("장바구니에 담기 완료");
  };

  const UseditemPick = async () => {
    await toggleUseditemPick({
      variables: {
        useditemId: String(router.query.id),
      },
    });
  };
  return (
    <FetchItemPresenter
      data={data}
      userInfo={userInfo}
      movePage={movePage}
      router={router}
      deleteBtn={deleteBtn}
      pickUp={pickUp}
      UseditemPick={UseditemPick}
    />
  );
}
