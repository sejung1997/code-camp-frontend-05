import styled from "@emotion/styled"
export const MyInput = styled.input``
import {IstlesIprops} from './Example.types'


export const MyButton = styled.button`
  background-color: ${(props: IstlesIprops) =>props.ggg === true? "yellow": "none" };
`
