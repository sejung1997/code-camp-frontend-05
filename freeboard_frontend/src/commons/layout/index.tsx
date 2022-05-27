// import { ReactChild, useEffect, useState } from "react";
// import HeaderPage from "./header/header.container";
// // import LayoutFooter from "./footer";
// // import LayoutNavi from "./navigation";
// import LayoutBanner from "./banner/banner.container";
// import styled from "@emotion/styled";
// import _, { debounce } from "lodash";
// import { keyframes } from "@emotion/react";

// interface Iprops {
//   children: ReactChild;
// }

// export default function LayoutPage(props: Iprops) {
//   const [rocket, setRocket] = useState(0);
//   const onrocket = _.debounce((rocket) => {
//     if (rocket === 10) return;
//     const newRocket = rocket + 1;
//     setRocket(newRocket);
//     onrocket(newRocket);
//   }, 1000);

//   console.log(rocket);
//   useEffect(() => {
//     onrocket(rocket);
//   }, []);

//   useEffect(() => {
//     const addlistener = () => {
//       window.addEventListener("scroll", function () {
//         setRocketPosition(window.scrollY);
//       });
//     };
//     addlistener();
//     console.log(rocketPosition);
//     return () => {
//       console.log("여기서 나갈래요");
//     };
//   }, []);
//   const Body = styled.div`
//     background-image: url("/images/un.png");
//     background-position: center;
//     background-size: cover;
//     background-attachment: fixed;
//     position: relative;
//     height: auto;
//   `;

//   const sat = keyframes`
//    from{
//      right: 0;
//      top: 50%;
//      transform: rotateY(0deg);


//    }
//    25%{
//     right: 50%;
//     top: 0;
//     transform: rotateY(90deg);

//    }
//    50%{
//     right:95% ;
//     top: 50%;
//     transform: rotateY(180deg);


//    }
//    75%{
//     right: 50%;
//     top: 92%;
//     transform: rotateY(270deg);


//    }
//    to{
//      right: 0%;
//      top: 50%;
//      transform: rotateY(360deg);

//    }
// `;
//   const rck = keyframes`
//   from{
//     top: 1000px;

//   }
//   50%{
//     top: 0;


//   }
//   to{
//     top: 1000px;

//   }
//   `;
//   const fire = keyframes`
//     from{
//       top: 1350px;
//       height: 100px;
//       opacity: 0;

//     }
//     50%{
//       top: 350px;
//       opacity: 1;
//       height: 500px;


  
//     }
//     to{
//       top: 1350px;
//       height: 100px;
//       opacity: 0;


//     }
//     `;

//   const Satelite = styled.img((props) => ({
//     width: "400px",
//     height: "400px",
//     right: "0",
//     top: "50%",
//     position: "fixed",
//     zIndex: "3",
//     animation: props.rocket === 10 ? `${sat} 15s ease-in-out  forwards` : "",
//   }));
//   const Rocket = styled.img((props) => ({
//     width: "200px",
//     height: "400px",
//     position: "fixed",
//     top: "1000px",
//     zIndex: "3",
//     animation: props.rocket === 10 ? `${rck} 10s ease-in-out  forwards` : "",
//   }));
//   const Fire = styled.img((props) => ({
//     width: "200px",
//     height: "100px",
//     position: "fixed",

//     top: "1300px",
//     zIndex: "3",
//     animation: props.rocket === 10 ? `${fire} 10s ease-in-out  forwards` : "",
//   }));

//   const Time = styled.h1`
//     font-size: 300px;
//     right: 50%;
//     top: 10%;
//     position: fixed;
//     color: #fff;
//   `;
//   return (
//     <>
//       <HeaderPage />
//       {/* <LayoutBanner></LayoutBanner> */}
//       {/* <LayoutNavi></LayoutNavi> */}
//       <Body>
//         {props.children}
//         {/* <Time>{rocket === 10 ? "" : 10 - rocket}</Time> */}
//         {/* <Satelite rocket={rocket} src="/images/rocket3.png" /> */}
//         {/* <Rocket rocket={rocket} src="/images/rocket2.png" /> */}
//         {/* <Fire rocket={rocket} src="/images/fire2.png" /> */}
//       </Body>
//       {/* <LayoutFooter></LayoutFooter> */}
//     </>
//   );
// }
