import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Button01 from "../../commons/button01";
import { Ref, useEffect, useRef, useState } from "react";

import { useMovePage } from "../../commons/function/movePage";

export default function () {
  const FETCH_USED_ITEMS_IPICK = gql`
    query fetchUseditemsIPicked($search: String, $page: Int) {
      fetchUseditemsIPicked(search: $search, page: $page) {
        name
        contents
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

  const { data } = useQuery(FETCH_USED_ITEMS_IPICK, {
    variables: { search: "" },
  });
  console.log(data?.fetchUseditemsIPicked);
  return (
    <>
      <div>
        {data &&
          data?.fetchUseditemsIPicked.map((el, index) => (
            <Contents key={index}>
              <CheckBox type="checkbox" id={`checkbox${index}`} />

              <Wrpper>
                <DIV>판매자: {el.seller}</DIV>
                <DIV>상품명: {el.name}</DIV>
                <DIV>가격: {el.price}원</DIV>
                <BtnGroup>
                  <Button01
                    onClick={movePage(`/${el.id}`)}
                    name="이동하기"
                  ></Button01>
                  <Button01 name="삭제하기"></Button01>
                </BtnGroup>
              </Wrpper>
            </Contents>
          ))}
      </div>
    </>
  );
}
