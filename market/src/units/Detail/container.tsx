import FetchItemPresenter from "./presenter";
import { FETCH_USED_ITEM, DELETE_USED_ITEM } from "./gql&types";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../pages/_app";
import { useContext } from "react";
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
  console.log(data);
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

  return (
    <FetchItemPresenter
      data={data}
      userInfo={userInfo}
      movePage={movePage}
      router={router}
      deleteBtn={deleteBtn}
    />
  );
}
