import { ReactChild, useEffect, useState } from "react";
import HeaderPage from "./header/header.container";
// import LayoutFooter from "./footer";
import LayoutNavi from "./navigation";
// import LayoutBanner from "./banner/banner.container";
import styled from "@emotion/styled";

interface Iprops {
  children: ReactChild;
}

export default function LayoutPage(props: Iprops) {
  const [roketPosition, setRocketPosition] = useState(0);
  useEffect(() => {
    console.log("마운트됨");
    setRocketPosition(2000);
    // componentWillUnmoun와 동일
    return () => {
      console.log("여기서 나갈래요");
    };
  });
  const Body = styled.div`
    margin-top: 150px;
    background-image: url("/images/un.png");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    height: 5000px;
  `;
  const Rocket = styled.img`
    width: 300px;
    position: absolute;
    left: 0;
  `;
  const Rocket2 = styled.img`
    width: 300px;
    position: absolute;
    right: 100px;
  `;

  return (
    <div>
      <HeaderPage />
      {/* <LayoutBanner></LayoutBanner> */}
      <LayoutNavi></LayoutNavi>
      <Body>
        {props.children}
        <Rocket2 src="/images/rocket3.png"></Rocket2>
        <Rocket src="/images/rocket2.png"></Rocket>
      </Body>
      {/* <LayoutFooter></LayoutFooter> */}
    </div>
  );
}
