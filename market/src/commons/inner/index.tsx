import styled from "@emotion/styled";
import { ReactChild } from "react";
interface Iprops {
  children: ReactChild[] | ReactChild;
}
export default function Inner(props: Iprops) {
  const Inner = styled.div`
    margin: auto;
    width: 1050px;
    left: 0;
    position: relative;
    right: 0;
  `;
  return (
    <>
      <Inner>{props.children}</Inner>
    </>
  );
}
