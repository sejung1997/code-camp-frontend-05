import { useQuery } from "@apollo/client";
import FetchUseditemsPresenter from "./presenter";
import { FETCH_USED_ITEMS } from "./gql&types";
import { useMovePage } from "../../commons/function/movePage";
export default function fetchUseditemsContainer() {
  const movePage = useMovePage();
  const { data } = useQuery(FETCH_USED_ITEMS, { variables: { page: 1 } });
  console.log(data);
  return <FetchUseditemsPresenter data={data} movePage={movePage} />;
}
