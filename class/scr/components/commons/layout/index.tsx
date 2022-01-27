import { ReactChild } from "react";
import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutFooter from "./footer";
import LayoutNavigation from "./navigation";
import { styled } from "@material-ui/core";
import { useRouter } from "next/router";

interface Iprops {
  children: ReactChild;
}
// const LayoutSidebar = styled.div`
//   width: 200px;
//   height: 1000px;
//   background-color: blue;
// `;
// const BodyWrapper = styled.div`
//   display: flex;
// `;
const HIDDEN_HEADERS = ["/lecture/0805-boards/new"];

export default function Layout(props: Iprops) {
  const router = useRouter();

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <div>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      {/* <BodyWrapper> */}
      {/* <LayoutSidebar /> */}
      <div>{props.children}</div>
      {/* </BodyWrapper> */}

      <LayoutFooter />
    </div>
  );
}
