import FetchItemPresenter from "./presenter";
import {
  FETCH_USED_ITEM,
  DELETE_USED_ITEM,
  ITEM_PICK,
  CREATE_POINT_TRANSACTION,
} from "./gql&types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext, useEffect, useState } from "react";
import { useMovePage } from "../../commons/function/movePage";
import { message, Modal } from "antd";
import { KakaoMapPage } from "../../commons/kakaoMap/index";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../commons/types/generated/types";
import { setLocal, removeLocal } from "../../commons/function/Localstorage";

export default function FetchItemContainer() {
  const [isPick, setIsPick] = useState(false);
  const [isPickCount, setIsPickCount] = useState(0);
  const movePage = useMovePage();
  const [toggleUseditemPick] = useMutation(ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION
  );

  const { userInfo, date, setTodayProduct } = useContext(GlobalContext);
  const router = useRouter();
  const setKaokaoMap = KakaoMapPage();

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  const todayData = {
    _id: data?.fetchUseditem?._id,
    seller: data?.fetchUseditem?.seller.name,
    name: data?.fetchUseditem?.name,
    price: data?.fetchUseditem?.price,
    images: data?.fetchUseditem?.images.filter((x: any) => x),
  };

  useEffect(() => {
    if (!data) return;
    const pick = JSON.parse(localStorage.getItem("heart") || "[]");
    if (pick.filter((x) => x._id === data?.fetchUseditem?._id).length === 1)
      setIsPick(true);
    setKaokaoMap(data);
    if (setLocal(date, todayData) === "stop") return;
    setTodayProduct(JSON.parse(localStorage.getItem(date)));
  }, [data]);

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

  const pickUp = () => {
    setLocal("baskets", todayData);
    message.info("장바구니에 담기 완료");
  };

  const UseditemPick = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: String(router.query.id),
        },
        // optimisticResponse: {
        //   pickedCount: (data?.fetchUseditem?.pickedCount || 0) + 1,
        // },
        // update(cache, { data }) {
        //   cache.writeQuery({
        //     query: FETCH_USED_ITEM,
        //     variables: { useditemId: String(router.query.id) },
        //     data: {
        //       fetchUseditem: {
        //         _id: String(router.query.id),
        //         pickedCount: data?.pickedCount,
        //         __typename: "Useditem",
        //       },
        //     },
        //   });
        // },
      });
      const Pick = result?.data?.toggleUseditemPick;
      setIsPickCount(Pick);
      setIsPick((prev) => !prev);
      if (!isPick) {
        setLocal("heart", todayData);
        message.info("찜하기 완료");
      } else {
        removeLocal("heart", data?.fetchUseditem?._id);
        message.info("찜하기 취소");
      }
    } catch (error) {
      message.info(error.message);
    }
  };
  console.log(data);
  const purchase = async () => {
    try {
      const pusrchaseInfo = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: String(router.query.id),
        },
      });
      message.info(
        `${pusrchaseInfo?.data?.createPointTransactionOfBuyingAndSelling.name}를 구매했습니다. `
      );
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
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
      purchase={purchase}
      isPick={isPick}
      isPickCount={isPickCount}
    />
  );
}
