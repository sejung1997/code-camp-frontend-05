import styled from "@emotion/styled";

export const Page = styled.div`
  width: 1200px;
  justify-content: center;
  display: flex;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  color: #fff;
  margin-top: 50px;
`;

export const Span = styled.span`
  font-size: ${(props) => (props.isActive ? "23px" : "20px")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  display: flex;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    color: red;
  }
  cursor: pointer;
`;

export const PagePrev = styled.div`
  font-size: 20px;
`;
export const PageNext = styled.div`
  font-size: 20px;
`;
