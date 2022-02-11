import Home from "../../../src/boards/write/boardWrite.container";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARD } from "../../../src/boards/write/boardWrite.container.mutation";
import { useRouter } from "next/router";
export default function boardWritePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.aaa },
  });
  const [imgUrl, setImgUrl] = useState(
    data?.fetchBoard?.images ? [...data?.fetchBoard?.images] : ["", "", ""]
  );
  return (
    <Home isEdit={true} data={data}  />
  );
}
