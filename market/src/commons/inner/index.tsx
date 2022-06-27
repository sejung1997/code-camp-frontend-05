import styled from "@emotion/styled";
import { ReactChild } from "react";
interface Iprops {
  children: ReactChild[] | ReactChild;
}
export default function Inner(props: Iprops) {
  const Inner = styled.div`
    margin: auto;
    width: calc(100% - 30px);
    max-width: 1200px;
    border: 1px solid red;
    margin-top: ${(props) => (props.height === "auto" ? "200px" : "0")};
    height: ${(props) => props.height};
    left: 0;
    right: 0;
    position: relative;
  `;
  return (
    <>
      <Inner height={props.height}>{props.children}</Inner>
    </>
  );
}
