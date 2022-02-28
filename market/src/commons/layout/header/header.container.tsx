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
  padding: 10px 30px;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  position: relative;
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
const UserInfo = styled.div`
  font-size: 20px;
  position: absolute;
  color: #fff;
  right: 0;
  bottom: -50px;
`;
const Point = styled.div`
  font-size: 20px;
  position: absolute;
  color: #fff;
  right: 0;
`;
export default function HeaderPage() {
  const { userInfo, date, todayProduct, point, setTodayProduct } =
    useContext(GlobalContext);

  // useEffect(() => {
  //   console.log("todayProduct");
  //   console.log(todayProduct);
  //   setNewData([...todayProduct]);
  // }, [todayProduct]);

  console.log("s");
  console.log(todayProduct);

  const movePage = useMovePage();
  const deleteProduct = (id) => () => {
    const temp = JSON.parse(localStorage.getItem(date)).filter(
      (el) => el.id !== id
    );
    localStorage.setItem(date, JSON.stringify(temp));
    setTodayProduct(temp);
  };
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
            <SignIn onClick={movePage("basket")}>장바구니</SignIn>
            <SignIn onClick={movePage("pick")}>찜한상품</SignIn>

            <br />
            <UserInfo onClick={movePage("signUp")}>
              {userInfo.name
                ? userInfo.name + "님 안녕하세요"
                : "로그인을 해주세요"}
              <Point> 포인트: {point}원</Point>
            </UserInfo>
          </MenuWrapper>
          <TodayProduct>
            <TodayLabel>오늘 본 상품</TodayLabel>
            {todayProduct?.map((el, index) => (
              <DataWrapper key={el.id}>
                <div>{index + 1}</div>
                <div>{el.name}</div>
                <Img src={`https://storage.googleapis.com/${el.images[0]}`} />
                <div>{el.price}원</div>
                <button onClick={deleteProduct(el.id)}>삭제하기</button>
              </DataWrapper>
            ))}
          </TodayProduct>
        </Inner>
      </Menu>
    </>
  );
}
