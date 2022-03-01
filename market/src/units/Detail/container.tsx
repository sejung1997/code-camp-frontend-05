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
import { useContext, useEffect } from "react";
import { useMovePage } from "../../commons/function/movePage";
import { message, Modal } from "antd";
import { KakaoMapPage } from "../../commons/kakaoMap/index";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../commons/types/generated/types";

export default function FetchItemContainer() {
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
    id: data?.fetchUseditem?._id,
    name: data?.fetchUseditem?.name,
    price: data?.fetchUseditem?.price,
    images: data?.fetchUseditem?.images.filter((x: any) => x),
  };

  useEffect(() => {
    if (!data) return;
    setKaokaoMap(data);

    const todaySeen = JSON.parse(localStorage.getItem(date) || "[]");
    const temp = todaySeen.filter((el) => el.id === todayData.id);
    if (temp.length >= 1) return;
    todaySeen.push(todayData);
    localStorage.setItem(date, JSON.stringify(todaySeen));
    setTodayProduct(JSON.parse(localStorage.getItem(date)));
  }, [data]);
  useEffect(() => {}, [data]);

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
    const pickUpData = JSON.parse(localStorage.getItem("baskets") || "[]");
    const temp = pickUpData.filter((el) => el.id === todayData.id);
    if (temp.length >= 1) return;
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
    />
  );
}
