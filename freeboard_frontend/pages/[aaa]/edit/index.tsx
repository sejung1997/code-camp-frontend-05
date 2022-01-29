import Home from "../../../src/boards/write/boardWrite.container";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "../../../src/boards/write/boardWrite.container.mutation";
import { useRouter } from "next/router";
export default function boardWritePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.aaa },
  });

  return <Home isEdit={true} data={data} />;
}
