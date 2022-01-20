import { message } from "antd";


export default function ProductWriteUI (props) {




  return (
    <>
      <h1>상품 {props.isEdit? '수정하기' : '등록하기'}</h1><br/>
      판매자: <input type="text" onChange={props.onChangeMySeller}/><br/>
      상품명: <input type="text" onChange={props.onChangeMyTitle}/><br/>
      상품내용: <input type="text" onChange={props.onChangeMyContent}/><br/>
      상품가격: <input type="text" onChange={props.onChangeMyPrice}/><br/><br/>
      <button onClick={props.isEdit? props.update : props.onClickSubmit}
      >
        {props.isEdit? '상품 수정하기': '상품 등록하기'}</button>


    </>
  )
} 