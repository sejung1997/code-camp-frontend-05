import styled from "@emotion/styled";
import Inner from "../../inner/index";
import { GlobalContext } from "../../../../pages/_app";
import { useMovePage } from "../../function/movePage";
import { useContext, useEffect, useState } from "react";
const Menu = styled.div`
  height: 150px;
  background-color: green;
  width: 100%;
`;
const SignIn = styled.div`
  font-size: 30px;
  color: #fff;
  padding: 10px 20px;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
const MenuWrapper = styled.div`
  display: flex;
`;
const TodayProduct = styled.div`
  position: fixed;
  right: 10px;
  padding: 20px;
  top: 150px;
  color: black;
  border: 1px solid green;
  border-radius: 5px;
`;
const TodayLabel = styled.div`
  font-size: 20px;
  color: green;
`;
const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 100px;
  left: 0;
`;
export default function HeaderPage() {
  const { userInfo, date, todayProduct } = useContext(GlobalContext);
  const [newData, setNewData] = useState([]);

  // useEffect(() => {
  //   console.log("todayProduct");
  //   console.log(todayProduct);
  //   setNewData([...todayProduct]);
  // }, [todayProduct]);

  console.log("s");
  console.log(todayProduct);

  const movePage = useMovePage();
  return (
    <>
      <Menu>
        <Inner>
          <MenuWrapper>
            <SignIn onClick={movePage("signIn")}>
              {userInfo.email ? "로그아웃" : "로그인"}
            </SignIn>
            <SignIn onClick={movePage("signUp")}>
              {userInfo.email ? "회원정보" : "회원가입"}
            </SignIn>

            <SignIn onClick={movePage("list")}>상품 목록</SignIn>
            <SignIn onClick={movePage("new")}>상품 등록</SignIn>
            <SignIn onClick={movePage("pick")}>장바구니</SignIn>

            <br />
            <SignIn onClick={movePage("signUp")}>
              {userInfo.name
                ? userInfo.name + "님 안녕하세요"
                : "로그인을 해주세요"}
            </SignIn>
          </MenuWrapper>
          <TodayProduct>
            <TodayLabel>오늘 본 상품</TodayLabel>
            {todayProduct?.map((el, index) => (
              <DataWrapper key={el.id}>
                <div>{index + 1}</div>
                <div>{el.name}</div>
                <Img src={`https://storage.googleapis.com/${el.images}`} />
                <div>{el.price}원</div>
                <button>삭제하기</button>
              </DataWrapper>
            ))}
          </TodayProduct>
        </Inner>
      </Menu>
    </>
  );
}
