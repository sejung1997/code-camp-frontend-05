import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useMovePage } from "../../commons/function/movePage";
import PurchaseItem from "../../commons/purchaseItem/index";
import { ButtonDelete } from "../Detail/styles";
import { removeLocal } from "../../commons/function/Localstorage";
const Label = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: green;
  padding: 100px;
  text-align: center;
`;
const Main = styled.div`
  width: 1200px;
`;
const Wrpper = styled.div`
  font-size: 23px;
  padding: 30px 20px;
  border: 1px solid green;
  width: 1100px;
  position: relative;
  border-radius: 5px;
`;
const DIV = styled.div`
  font-size: 23px;
  display: flex;
  padding: 5px 0;
  align-items: center;
`;

const BtnGroup = styled.div`
  position: absolute;
  top: 120px;
  right: 10px;
  display: flex;
`;
const Contents = styled.div`
  display: flex;
  width: 1200px;
  align-items: center;
  margin-bottom: 120px;
`;
const CheckBox = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;
const LabelCheckBox = styled.span`
  margin-bottom: 0;
`;

export default function BasketPageContainer() {
  const checked = useRef();

  const [data, setData] = useState([]);
  const movePage = useMovePage();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("baskets")));
  }, []);

  const deletekey = (id) => () => {
    removeLocal("baskets", id);
    window.location.reload();
  };

  if (process.browser) {
    const checkBoxes = document?.getElementById("checkALL");

    checkBoxes?.addEventListener("click", () => {
      data.forEach((_, index) => {
        const checkBox = document.getElementById(`checkbox${index}`);
        checkBox.checked = checkBoxes.checked;
      });
    });
  }
  console.log(data);
  const onClickBox = () => {};
  return (
    <Main>
      <Label>장바구니</Label>

      <DIV>
        <CheckBox type="checkbox" id="checkALL" />
        <LabelCheckBox>모두선택</LabelCheckBox>
      </DIV>
      {data &&
        data.map((el, index) => (
          <Contents key={index}>
            <CheckBox
              type="checkbox"
              id={`checkbox${index}`}
              onClick={onClickBox}
            />

            <Wrpper>
              <DIV>판매자: {el.seller}</DIV>
              <DIV>상품명: {el.name}</DIV>
              <DIV>가격: {el.price}원</DIV>
              <BtnGroup>
                <ButtonDelete onClick={movePage(`/${el._id}`)}>
                  이동하기
                </ButtonDelete>
                <ButtonDelete onClick={deletekey(el._id)}>
                  삭제하기
                </ButtonDelete>
              </BtnGroup>
            </Wrpper>
          </Contents>
        ))}
      <PurchaseItem allData={data} />
    </Main>
  );
}
