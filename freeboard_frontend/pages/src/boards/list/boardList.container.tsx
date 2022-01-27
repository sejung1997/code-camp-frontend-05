import BoardListPageUI from "../list/boardList.presenter";
import { useRouter } from "next/router";

export default function boardListPage(props) {
  const router = useRouter();
  const register = () => {
    router.push("/NEW");
  };

  const detailPage = (id: any) => {
    router.push(`/${id}`);
  };

  return (
    <BoardListPageUI
      a={props.a}
      register={register}
      detailPage={detailPage}
      searchClick={props.searchClick}
    />
  );
}
