import { Rate } from "antd";

import styled from "@emotion/styled";

export const CommentArea = styled.div`
  width: 1200px;
  position: absolute;
  left: 0;
  margin: auto;
  right: 0;
  margin-top: 2200px;
  color: #fff;
`;
export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 40px 0 84px 0;
`;
export const Input = styled.input`
  width: 120px;
  margin-right: 15px;
  height: 30px;
  padding-left: 10px;
  &::placeholder {
    color: #fff;
    background-color: transparent;
  }
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
`;
export const privateInfo = styled.div`
  display: flex;
  font-size: 16px;
`;
export const InputC = styled.textarea`
  width: 1200px;
  height: 161px;
  position: absolute;
  padding: 10px 0 0 10px;
  &::placeholder {
    color: #fff;
    background-color: transparent;
  }
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
`;
export const letter = styled.div`
  position: absolute;
  left: 20px;
  bottom: 14px;
`;
export const submitButton = styled.button`
  font-size: 16px;
  padding: 14px 16px;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;
export const contents = styled.div`
  width: 1200px;
  height: 161px;
  position: relative;
`;

export const Hr = styled.div`
  width: 1200px;
  position: absolute;
`;
export const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  width: 1200px;
  bord: 1px solid grey;
  position: relative;
`;
export const wrapper = styled.div`
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
`;
export const Writer = styled.div`
  font-weight: 600;
`;
export const buttonUpdate = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;
export const buttonDelete = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;

export const content = styled.div`
  margin-bottom: 20px;
`;
export const date = styled.div``;
export const Comment = styled.div`
  height: 150px;
  width: 1200px;
  border-bottom: 1px solid grey;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const rate = styled(Rate)`
  margin-left: 20px;
`;
