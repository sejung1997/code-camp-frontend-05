import styled from "@emotion/styled";
export const Box1 = styled.div`
  width: 78px;
  height: 78px;
  text-align: center;
  padding-top: 23px;
  font-size: 12px;
  border: 1px solid #fff;
  background-color: #ccc;
  color: purple;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
`;

export const img = styled.img`
  display: ${(props) => (props.imgUrl ? "block" : "none")};
  width: 78px;
  height: 78px;
  position: absolute;
  top: 0;
  left: 0;
`;
