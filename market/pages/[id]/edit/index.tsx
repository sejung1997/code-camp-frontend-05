import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM } from "../../../src/units/Detail/gql&types";
import CreateItemContainer from "../../../src/units/new/createItem.container";
export default function CreateItemPage() {
  const router = useRouter();
  const [isEdit, _] = useState(true);
  const { data: defaultData } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.id) },
  });
  return <CreateItemContainer isEdit={isEdit} defaultData={defaultData} />;
}
