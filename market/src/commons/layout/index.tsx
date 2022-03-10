import {
  ReactChild,
  Fragment,
  useState,
  Dispatch,
  SetStateAction,
  createContext,
} from "react";
import styled from "@emotion/styled";
import Header from "./header/header.container";
import Banner from "./banner/banner";
import Inner from "../inner/index";
interface Iprops {
  children: ReactChild;
}
interface IGlobalContext {
  keyword?: string;
  setKeyword?: Dispatch<SetStateAction<String>>;
}
export const GlobalContext = createContext<IGlobalContext>({});
const Body = styled.div``;
export default function LayoutPage(props: Iprops) {
  const [keyword, setKeyword] = useState("");
  const searchValue = {
    keyword,
    setKeyword,
  };
  return (
    <Fragment>
      <Header setKeyword={setKeyword} />
      <Banner />
      <Body>
        <Inner>
          <GlobalContext.Provider value={searchValue}>
            {props.children}
          </GlobalContext.Provider>
        </Inner>
      </Body>
    </Fragment>
  );
}
