import * as aaaa from "./BoardWrite.styles"

export default function BoardWriteUI(props) {


  return (
    <>
    작성자: <aaaa.MyInput type="text" onChange={props.ddd}/><br/>
    제목: <aaaa.MyInput type="text" onChange={props.fff}/><br/>
    내용: <aaaa.MyInput type="text" onChange={props.eee}/><br/>
    <aaaa.MyButton onClick={props.ccc} ggg={props.isActive}>GRAPHQL-API 요청하기</aaaa.MyButton>
    <div>{props.bbb}</div>

  </>
  )
}
export const a = 3