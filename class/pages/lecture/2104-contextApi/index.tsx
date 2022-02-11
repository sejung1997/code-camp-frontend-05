import { createContext } from "react";
import BoardWriteUIContext from "../../../scr/components/units/21-contextApi/BoardWrite.container";

export const exampleContext = createContext(null);
export default function ContextApiPage() {
  const myvalues = {
    isEdit: true,
  };
  return (
    <exampleContext.Provider value={myvalues}>
      <BoardWriteUIContext />;
    </exampleContext.Provider>
  );
}
