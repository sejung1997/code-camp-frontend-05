import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: "myFont", cursive;
    color: #fff;
  }
  @font-face {
    font-family: "myFont";
    src: url("/fonts/GowunDodum-Regular.ttf");
  }
  h4 {
    color: #fff;
  }
  h1 {
    color: #fff;
    font-weight: bold;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
