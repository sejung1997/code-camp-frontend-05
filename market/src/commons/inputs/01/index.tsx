import styled from "@emotion/styled"

export default function Input01 (props) {
  const Input01 = styled.input`
    
  `
  return <Input01 type={props.type} {...props.register} />
}