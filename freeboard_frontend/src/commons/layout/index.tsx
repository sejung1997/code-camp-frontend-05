import { ReactChild } from "react";
import LayoutHeader from "./header";
// import LayoutFooter from "./footer";
// import LayoutNavi from "./navigation";
import LayoutBanner from "./banner";
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
  border: 1px solid; ;
`;

export default function LayoutPage(props: Iprops) {
  return (
    <div>
      <LayoutHeader></LayoutHeader>
      <LayoutBanner></LayoutBanner>
      {/* <LayoutNavi></LayoutNavi> */}
      <Body>{props.children}</Body>
      {/* <LayoutFooter></LayoutFooter> */}
    </div>
  );
}
