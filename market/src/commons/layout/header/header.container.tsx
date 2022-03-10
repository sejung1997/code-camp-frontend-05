import * as header from "./header.styles";
import Inner from "../../inner/index";
import * as List from "../../../units/List/styles";
import { useMovePage } from "../../function/movePage";
import { useContext, useState, ChangeEvent, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "./types&gql";
import { useQuery } from "@apollo/client";
import _ from "lodash";

export default function HeaderPage(props) {
  const { acessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const movePage = useMovePage();

  const getDebounce = _.debounce((keyData) => {
    props.setKeyword(keyData);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };
  const onClickSearch = () => {
    movePage("/list");
  };

  return (
    <>
      <header.Menu>
        <Inner>
          <header.logo>
            <header.logoImg
              onClick={movePage("/")}
              src="/images/pngwing.com (8).png"
            />
          </header.logo>
          <header.subMenu>
            <header.SignIn onClick={movePage("signIn")}>
              {acessToken ? "로그아웃" : "로그인"}
            </header.SignIn>
            <header.SignIn onClick={movePage("signUp")}>
              {acessToken ? "마이페이지" : "회원가입"}
            </header.SignIn>

            <header.Search>
              <header.SearchTitle onChange={onChangeSearch} type="text" />

              <header.searchBtn onClick={onClickSearch} />
            </header.Search>
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
      </header.Menu>
    </>
  );
}
