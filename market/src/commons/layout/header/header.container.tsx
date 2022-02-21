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

export default function HeaderPage() {
  const { userInfo, todayProduct } = useContext(GlobalContext);
  const [newData, setNewData] = useState([]);
  console.log(todayProduct);
  const date = String(new Date()).slice(0, 10);

  // useEffect(() => {
  //   setNewData([...todayProduct]);
  // }, [todayProduct]);
  useEffect(() => {
    setNewData(JSON.parse(localStorage.getItem(date)));
  }, []);
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
            {newData?.map((el, index) => (
              <div key={el.id}>
                <div>{index + 1}</div>
                <div>{el.seller}</div>
                <div>{el.name}</div>
                <div>{el.price}</div>
              </div>
            ))}
          </TodayProduct>
        </Inner>
      </Menu>
    </>
  );
}
