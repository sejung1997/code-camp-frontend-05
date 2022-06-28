import { Rate } from "antd";

import styled from "@emotion/styled";
interface IEdit {
  isEdit: boolean;
}
interface IEditBtn {
  isEdit: boolean;
  el: any;
}
export const CommentArea = styled.div<IEdit>`
  width: 1200px;
  left: 0;
  margin: auto;
  right: 0;
  color: green;
  margin-top: ${(props) => (props.isEdit ? "50px" : "325px")};
`;
export const Title = styled.div<IEdit>`
  font-size: 30px;
  font-weight: bold;
  padding: 40px 0 84px 0;
  ${(props) => (props.isEdit === true ? "display: none" : "")}
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
  color: green;
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
export const cancelButton = styled.button<IEditBtn>`
  /* ${(props) =>
    props.isEdit === true ? "display: block" : "display: none"} */

  display: ${(props) => (props.isEdit ? "block" : "none")};

  font-size: 16px;
  padding: 14px 16px;
  color: green;
  position: absolute;
  right: 100px;
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

export const rate = styled(Rate)`
  margin-left: 20px;
`;
