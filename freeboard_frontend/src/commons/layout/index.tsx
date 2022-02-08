import { ReactChild, useEffect, useState } from "react";
import HeaderPage from "./header/header.container";
// import LayoutFooter from "./footer";
// import LayoutNavi from "./navigation";
// import LayoutBanner from "./banner/banner.container";
import styled from "@emotion/styled";

interface Iprops {
  children: ReactChild;
}

export default function LayoutPage(props: Iprops) {
  const [rocketPosition, setRocketPosition] = useState(0);
  // useEffect(() => {
  //   const addlistener = () => {
  //     window.addEventListener("scroll", function () {
  //       setRocketPosition(window.scrollY);
  //     });
  //   };
  //   addlistener();
  //   console.log(rocketPosition);
  //   return () => {
  //     console.log("여기서 나갈래요");
  //   };
  // }, []);
  const Body = styled.div`
    /* margin-top: 150px; */
    background-image: url("/images/un.png");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    height: 5000px;
  `;
  const Rocket = styled.img`
    width: 200px;
    left: 0;
    top: 400px;
    position: absolute;
    /* left: ${(props) => props.rocketPosition}; */
  `;
  const Rocket2 = styled.img`
    width: 250px;
    top: 0;
    position: absolute;
    right: 50px;
  `;

  return (
    <div>
      <HeaderPage />
      {/* <LayoutBanner></LayoutBanner> */}
      {/* <LayoutNavi></LayoutNavi> */}
      <Body>
        {props.children}
        <Rocket2 src="/images/rocket3.png"></Rocket2>
        <Rocket
          // rocketPosition={rocketPosition}
          src="/images/rocket2.png"
        ></Rocket>
      </Body>
      {/* <LayoutFooter></LayoutFooter> */}
    </div>
  );
}
