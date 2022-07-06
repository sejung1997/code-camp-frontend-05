import styled from "@emotion/styled";
interface IMyButtonProps {
  isValid?: boolean;
}
const Button = styled.button`
  /* background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""}; */
  padding: 10px 40px;
  display: block;
  background-color: transparent;
  border: 1px solid #3cb371;

  border-radius: 7px;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: #3cb371;
    border: none;
  }
`;

export default function Button01(props) {
  return <Button onClick={props.click}>{props.name}</Button>;
}
