import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useMovePage } from "../../commons/function/movePage";
import PurchaseItem from "../../commons/purchaseItem/index";
import Button01 from "../../commons/button01/index";
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
  padding: 30px 20px;
  border: 1px solid green;
  margin-bottom: 100px;
  width: 1000px;
`;
const DIV = styled.div`
  font-size: 23px;
  display: flex;
  padding: 5px 0;
  align-items: center;
`;

const BtnGroup = styled.div`
  margin-left: 600px;
  margin-top: 0;
  display: flex;
`;
const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const LabelCheckBox = styled.span`
  margin-bottom: 0;
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

      <DIV>
        <CheckBox type="checkbox" />
        <LabelCheckBox>모두선택</LabelCheckBox>
      </DIV>
      {data &&
        data.map((el, index) => (
          <DIV key={index}>
            <CheckBox type="checkbox" />

            <Wrpper>
              <DIV>판매자: {el.seller}</DIV>
              <DIV>상품명: {el.name}</DIV>
              <DIV>가격: {el.price}원</DIV>
              <BtnGroup>
                <Button01
                  onClick={movePage(`/${el.id}`)}
                  name="이동하기"
                ></Button01>
                <Button01 onClick={deletekey(index)} name="삭제하기"></Button01>
              </BtnGroup>
            </Wrpper>
          </DIV>
        ))}
      <PurchaseItem allData={data} />
    </Main>
  );
}
