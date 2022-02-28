import styled from "@emotion/styled";
import { Button } from "antd";
interface IMyButtonProps {
  isValid?: boolean;
}
const Button = styled.button`
  /* background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""}; */
  width: 179px;
  height: 52px;
  display: block;
  background-color: transparent;
  border: 1px solid green;
  margin-right: 24px;

  border-radius: 7px;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: green;
  }
`;

export default function Button01(props) {
  return <Button onClick={props.click}>{props.name}</Button>;
}
