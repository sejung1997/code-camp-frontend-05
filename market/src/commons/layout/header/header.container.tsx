import * as header from "./header.styles";
import Inner from "../../inner/index";
import InfiniteScroll from "react-infinite-scroller";

import { GlobalContext } from "../../../../pages/_app";
import { useMovePage } from "../../function/movePage";
import { useContext, useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "./types&gql";
import { useQuery } from "@apollo/client";
export default function HeaderPage() {
  const { userInfo, date, todayProduct, point, setTodayProduct, acessToken } =
    useContext(GlobalContext);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
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
  const onloadMore = () => {};
  return (
    <>
      <header.Menu>
        <Inner>
          <header.subMenu>
            <header.SignIn onClick={movePage("signIn")}>
              {acessToken ? "로그아웃" : "로그인"}
            </header.SignIn>
            <header.SignIn onClick={movePage("signUp")}>
              {acessToken ? "마이페이지" : "회원가입"}
            </header.SignIn>
          </header.subMenu>

          <header.MenuWrapper>
            <header.MenuTitle onClick={movePage("list")}>
              상품 목록
            </header.MenuTitle>
            <header.MenuTitle onClick={movePage("new")}>
              상품 등록
            </header.MenuTitle>
            <header.MenuTitle onClick={movePage("basket")}>
              장바구니
            </header.MenuTitle>
            <header.MenuTitle onClick={movePage("pick")}>
              찜한상품
            </header.MenuTitle>
          </header.MenuWrapper>

          <header.UserInfo onClick={movePage("signUp")}>
            {acessToken
              ? data?.fetchUserLoggedIn?.name + "님 안녕하세요"
              : "로그인을 해주세요"}
            <header.Point>
              포인트: {data?.fetchUserLoggedIn?.userPoint.amount}원
            </header.Point>
          </header.UserInfo>
        </Inner>

        <header.TodayProduct>
          <header.TodayLabel>오늘 본 상품</header.TodayLabel>
          <InfiniteScroll pageStart={0} loadMore={onloadMore} hasMore={true}>
            {todayProduct?.map((el, index) => (
              <header.DataWrapper key={el.id}>
                <div>{index + 1}</div>
                <div>{el.name}</div>
                <header.Img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                  // onError="/images/Vector.png"
                />
                <div>{el.price}원</div>
                <header.SmallBtn onClick={deleteProduct(el.id)}>
                  삭제하기
                </header.SmallBtn>
              </header.DataWrapper>
            ))}
          </InfiniteScroll>
        </header.TodayProduct>
      </header.Menu>
    </>
  );
}
