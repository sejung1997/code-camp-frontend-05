import { useState } from "react";
import { widthAuth } from "../../src/commons/withAuth";

import CreateItemContainer from "../../src/units/new/createItem.container";
function CreateItemPage() {
  return <CreateItemContainer />;
}

export default widthAuth(CreateItemPage);
