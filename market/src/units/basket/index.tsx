import styled from "@emotion/styled";
import { HTMLInputTypeAttribute, useEffect, useRef, useState } from "react";
import { useMovePage } from "../../commons/function/movePage";
import PurchaseItem from "../../commons/purchaseItem/index";
import { ButtonDelete } from "../Detail/styles";
import { removeLocal } from "../../commons/function/Localstorage";
import { HtmlProps } from "next/dist/shared/lib/utils";
const Label = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: green;
  padding: 100px;
  text-align: center;
`;
const Main = styled.div`
  width: 100%;
`;
const Wrpper = styled.div`
  font-size: 23px;
  padding: 30px 20px;
  border: 1px solid green;
  width: 100%;
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
  width: 100%;
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
  const [data, setData] = useState([]);
  const movePage = useMovePage();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("baskets")));
    checkBoxes = document?.getElementById("checkALL");
  }, []);

  const deletekey = (id) => () => {
    removeLocal("baskets", id);
    window.location.reload();
  };

  let checkBoxes: any;
  if (process.browser) checkBoxes = document?.getElementById("checkALL");
  checkBoxes?.addEventListener("click", () => {
    data.forEach((_, index) => {
      const checkBox: any = document.getElementById(`checkbox${index}`);
      checkBox.checked = checkBoxes.checked;
    });
  });

  const onClickBox = () => {
    const aaa = data.filter((_, index) => {
      const temp = document.getElementById(
        `checkbox${index}`
      ) as HTMLInputElement;
      return temp.checked;
    });
    if (aaa.length === data.length) checkBoxes.checked = true;
    if (aaa.length === 0) checkBoxes.checked = false;
  };

  return (
    <Main>
      <Label>????????????</Label>

      <DIV>
        <CheckBox type="checkbox" id="checkALL" />
        <LabelCheckBox>????????????</LabelCheckBox>
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
              <DIV>?????????: {el.seller}</DIV>
              <DIV>?????????: {el.name}</DIV>
              <DIV>??????: {el.price}???</DIV>
              <BtnGroup>
                <ButtonDelete onClick={movePage(`/${el._id}`)}>
                  ????????????
                </ButtonDelete>
                <ButtonDelete onClick={deletekey(el._id)}>
                  ????????????
                </ButtonDelete>
              </BtnGroup>
            </Wrpper>
          </Contents>
        ))}
      <PurchaseItem allData={data} />
    </Main>
  );
}
