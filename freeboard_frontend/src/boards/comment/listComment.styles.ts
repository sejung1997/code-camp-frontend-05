import styled from "@emotion/styled";
import { Rate } from "antd";
export const CommentInfo = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 1200px;
  position: relative;
`;
export const Img = styled.img`
  margin-right: 16.5px;
  width: 40px;
`;
export const wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 15px;
  right: 0;
`;
export const Writer = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const buttonUpdate = styled.img`
  background-color: transparent;
  border-radius: 5px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
export const buttonDelete = styled.img`
  background-color: transparent;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
  }
`;

export const content = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
`;
export const date = styled.div``;
export const Comment = styled.div`
  height: 200px;
  width: 1200px;
  margin: 0 auto;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  border-bottom: 1px solid #fff;
`;
export const rate = styled(Rate)`
  margin-left: 18px;
`;
