import { ReactChild, useEffect, useState } from "react";
import HearderPage from "./header/headerPage";
import NavigationPage from "./navigation/navigationPage";
import styled from "@emotion/styled";
export default function layoutPage(props) {
  const D = styled.div`
    display: flex;
  `;
  const Body = styled.div``;
  return (
    <div>
      <HearderPage></HearderPage>
      <D>
        <NavigationPage></NavigationPage>
        <Body>{props.children}</Body>
      </D>
    </div>
  );
}
