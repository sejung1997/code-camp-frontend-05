import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { ButtonDelete } from "../Detail/styles";

import { useMovePage } from "../../commons/function/movePage";
import { useEffect } from "react";

export default function () {
  const FETCH_USED_ITEMS_IPICK = gql`
    query fetchUseditemsIPicked($search: String, $page: Int) {
      fetchUseditemsIPicked(search: $search, page: $page) {
        name
        contents
        price
        _id
        seller {
          name
        }
      }
    }
  `;
  const movePage = useMovePage();

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
    font-size: 23px;
    padding: 5px 0;
  `;

  const { data } = useQuery(FETCH_USED_ITEMS_IPICK, {
    variables: { search: "" },
  });

  console.log(data?.fetchUseditemsIPicked);
  console.log("data?.fetchUseditemsIPicked");
  useEffect(() => {
    if (!data) return;
    const checkBoxes = document?.getElementById("checkALL");

    checkBoxes?.addEventListener("click", () => {
      data?.fetchUseditemsIPicked?.forEach((_, index) => {
        const checkBox = document.getElementById(`checkbox${index}`);
        checkBox.checked = checkBoxes.checked;
      });
    });
  }, [data]);

  return (
    <>
      <Main>
        <Label>찜한상품</Label>

        <DIV>
          <CheckBox type="checkbox" id="checkALL" />
          <LabelCheckBox>모두선택</LabelCheckBox>
        </DIV>
        <div>
          {data &&
            data?.fetchUseditemsIPicked?.map((el, index) => (
              <Contents key={index}>
                <CheckBox type="checkbox" id={`checkbox${index}`} />

                <Wrpper>
                  <DIV>판매자: {el.seller.name}</DIV>
                  <DIV>상품명: {el.name}</DIV>
                  <DIV>가격: {el.price}원</DIV>
                  <BtnGroup>
                    <ButtonDelete onClick={movePage(`/${el._id}`)}>
                      이동하기
                    </ButtonDelete>
                    <ButtonDelete>삭제하기</ButtonDelete>
                  </BtnGroup>
                </Wrpper>
              </Contents>
            ))}
        </div>
      </Main>
    </>
  );
}
