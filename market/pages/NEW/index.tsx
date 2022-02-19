import { useState } from "react";
import CreateItemContainer from "../../src/units/createItem/createItem.container";
export default function CreateItemPage() {
  const [isEdit, setIsEdit] = useState(false);
  return <CreateItemContainer isEdit={isEdit} />;
}
