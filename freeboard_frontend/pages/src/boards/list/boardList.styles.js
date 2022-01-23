import styled from "@emotion/styled"



export const Column = styled.div`
  width: 300px;
  text-align: center;
  height: calc(583px/11);
  border-top: 1px solid grey;
  display: flex;
  align-items: center;

`
export const Row = styled.div`
  display: flex;
`
export const TopRow = styled.div`
  display: flex;
  height: calc(583px/11);
`
export const List = styled.div`
  margin: 200px;
  width: 1200px;
  height: 583px;
  border-bottom: 1px solid grey;
`

export const Button = styled.button`
  margin-top:40px;
  width: 170px;
  hegiht: 51px;
  right: 0;   

`
export const Title = styled.span`
  cursor:pointer;

  :hover {
    text-decoration: underline; 
  }
`