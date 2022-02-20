import styled from "@emotion/styled";
import { Rate } from "antd";
export const CommentInfo = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 1200px;
  position: relative;
`;
export const replyCommentInfo = styled.div`
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
export const replyWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 0;
  margin-left: 50px;
  border-bottom: 1px solid green;
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
export const buttonReply = styled.button`
  position: absolute;
  top: 100px;
  right: 0;
  background-color: #fff;
  border: 0.5px solid green;
  :hover {
    cursor: pointer;
    background-color: green;
    color: #fff;
  }
`;
export const buttonReplyReply = styled.button`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  border: 0.5px solid green;
  :hover {
    cursor: pointer;
    background-color: green;
    color: #fff;
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
  color: green;
  border-bottom: 1px solid green;
  position: relative;
`;
export const rate = styled(Rate)`
  margin-left: 18px;
`;
export const Input = styled.input`
  width: 120px;
  margin-right: 15px;
  height: 30px;
  padding-left: 10px;
  &::placeholder {
    color: green;
    background-color: transparent;
  }
  background-color: transparent;
  border: 1px solid green;
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
    color: green;
    background-color: transparent;
  }
  background-color: transparent;
  border: 1px solid green;
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
  border: 1px solid green;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: green;
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
export const cancelButton = styled.button`
  font-size: 16px;
  padding: 14px 16px;
  color: white;
  position: absolute;
  right: 120px;
  bottom: 0;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: green;
  }
`;
