
import * as aaaa from "./Example.styles"

export default function BoardWriteUI(props) {


  return (
    <>
    <h1>{props.aaa? "수정" : "등록" }페이지</h1>
    작성자: <aaaa.MyInput type="text" onChange={props.ddd}/><br/>
    제목: <aaaa.MyInput type="text" onChange={props.fff}/><br/>
    내용: <aaaa.MyInput type="text" onChange={props.eee}/><br/>
    <aaaa.MyButton
      onClick={props.aaa? props.xxx : props.ccc} 
      ggg={props.isActive}
      >
        {props.aaa? "수정" : "등록" }하기
    </aaaa.MyButton>

    {/* 
      {props.aaa ? (
        <AAA.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</AAA.MyButton>
      ) : (
        <AAA.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</AAA.MyButton>
      )}
      {/* 삼항 연산자 사용은 2-3줄 정도가 적당함 

      {props.aaa && <AAA.MyButton onClick={props.xxx} ggg={props.isActive}>수정하기</AAA.MyButton>}
      {!props.aaa && <AAA.MyButton onClick={props.ccc} ggg={props.isActive}>등록하기</AAA.MyButton>}
      {/* 4줄 이상은 위의 방법이 더 좋음.. 
      */}



  </>
  )
}
export const a = 3