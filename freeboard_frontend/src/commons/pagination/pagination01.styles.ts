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
  margin-top: 850px;
`;
export const Span = styled.span`
  color: ${(props) => (props.isActive ? "blue" : "")}
  display: flex;
  font-size: 20px;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    color: red;
  }
`;

export const PagePrev = styled.div`
font-size: 20px;<div className="."></div>
`;
export const PageNext = styled.div`
  font-size: 20px;
`;
