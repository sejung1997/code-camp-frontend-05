import { ReactChild } from "react";
import HeaderPage from "./header/header.container";
// import LayoutFooter from "./footer";
// import LayoutNavi from "./navigation";
import LayoutBanner from "./banner/banner.container";
import styled from "@emotion/styled";

interface Iprops {
  children: ReactChild;
}
const Body = styled.div`
  background-image: url("/images/fgh.jfif");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  height: 5000px;
`;

export default function LayoutPage(props: Iprops) {
  return (
    <div>
      <HeaderPage />
      <LayoutBanner></LayoutBanner>
      {/* <LayoutNavi></LayoutNavi> */}
      <Body>{props.children}</Body>
      {/* <LayoutFooter></LayoutFooter> */}
    </div>
  );
}
