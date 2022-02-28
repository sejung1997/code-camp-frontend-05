import styled from "@emotion/styled";
import { breackPoints } from "../../../scr/commons/styles/media";
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media ${breackPoints.mobile} {
    width: 6.25rem;
    height: 100px;
    display: none;
    background-color: blue;
  }
  @media ${breackPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: green;
  }
`;
export default function responsiveDesignPage() {
  return (
    <>
      <img src="/image/lotto.png"></img>
      <Wrapper>상 자</Wrapper>
    </>
  );
}
