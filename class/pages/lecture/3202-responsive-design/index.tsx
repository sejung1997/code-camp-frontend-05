import styled from "@emotion/styled";
const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
`;
export default function responsiveDesignPage() {
  return (
    <>
      <Wrapper>상 자</Wrapper>
    </>
  );
}
