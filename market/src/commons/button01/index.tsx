import styled from "@emotion/styled";

interface IMyButtonProps {
  isValid?: boolean;
}
const Button = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props) {
  return <Button>{props.name}</Button>;
}
