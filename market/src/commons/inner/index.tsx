import styled from "@emotion/styled";
import { ReactChild } from "react";
interface Iprops {
  children: ReactChild[] | ReactChild;
}
export default function Inner(props: Iprops) {
  const Inner = styled.div`
    margin: auto;
    width: 1200px;
    left: 0;
    right: 0;
  `;
  return (
    <>
      <Inner>{props.children}</Inner>
    </>
  );
}
