import styled from "@emotion/styled";
export const Box1 = styled.div`
  width: 78px;
  height: 78px;
  text-align: center;
  padding-top: 23px;
  font-size: 12px;
  color: green;
  border: 1px solid green;

  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
`;
interface IImgUrl {
  imgUrl: any;
}
export const img = styled.img<IImgUrl>`
  display: ${(props: any) => (props.imgUrl ? "block" : "none")};
  width: 78px;
  height: 78px;
  position: absolute;
  top: 0;
  left: 0;
`;
