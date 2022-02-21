import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useMovePage } from "../../commons/function/movePage";
const Label = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: green;
  padding: 100px;
  text-align: center;
`;
const Main = styled.div`
  width: 1200px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
const Wrpper = styled.div`
  font-size: 23px;
  padding: 50px 20px;
  position: relative;
  border: 1px solid green;
`;
const DIV = styled.div`
  font-size: 23px;
`;
const Btn = styled.button`
  font-size: 23px;
  padding: 10px 20px;
`;
const BtnGroup = styled.div`
  position: absolute;
  right: 30px;
  bottom: 20px;
`;

export default function PickUpPage() {
  const [data, setData] = useState([]);
  const movePage = useMovePage();
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("baskets")));
  }, []);
  console.log(data);
  const deletekey = (index) => () => {
    const temp = JSON.parse(localStorage.getItem("baskets")).filter(
      (_, pickIndex) => pickIndex !== index
    );
    localStorage.setItem("baskets", JSON.stringify(temp));
    window.location.reload();
  };
  return (
    <Main>
      <Label>장바구니</Label>
      {data &&
        data.map((el, index) => (
          <Wrpper key={index}>
            <DIV>판매자: {el.seller}</DIV>
            <DIV>상품명: {el.name}</DIV>
            <DIV>가격: {el.price}원</DIV>
            <BtnGroup>
              <Btn onClick={movePage(`/${el.id}`)}>이동하기</Btn>
              <Btn onClick={deletekey(index)}>삭제하기</Btn>
            </BtnGroup>
          </Wrpper>
        ))}
    </Main>
  );
}
