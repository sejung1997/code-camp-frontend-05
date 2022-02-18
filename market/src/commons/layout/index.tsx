import { ReactChild, Fragment, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Header from "./header/header.container";
import Inner from "../inner/index";
interface Iprops {
  children: ReactChild;
}
const Body = styled.div``;
export default function LayoutPage(props: Iprops) {
  return (
    <Fragment>
      <Header />

      <Body>
        <Inner>{props.children}</Inner>
      </Body>
    </Fragment>
  );
}
