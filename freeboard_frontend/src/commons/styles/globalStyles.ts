import { css } from "@emotion/react";
// import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    // color: #fff;
    font-family: "myFont", cursive;
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
