import styled from "@emotion/styled";

export function Input02(props) {
  const Input02 = styled.input`
    width: 200px;
  `;
  return (
    <Input02
      placeholder={props.placeholder}
      type={props.type}
      defaultValue={props.defaultValue}
      {...props.register}
    />
  );
}
