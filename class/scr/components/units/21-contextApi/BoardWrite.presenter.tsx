import { useContext } from "react";
import { exampleContext } from "../../../../pages/lecture/2104-contextApi/index";

export default function BoardWriteUIContext() {
  const { isEdit } = useContext(exampleContext);
  return <div>{isEdit ? "수정" : "등록"}</div>;
}
