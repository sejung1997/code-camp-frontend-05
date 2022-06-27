import * as header from "./header.styles";
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

  return (
    <>
      <header.Menu>
        <header.Inner>
          {/* <header.logo>
            <header.logoImg
              onClick={movePage("/")}
              src="/images/pngwing.com (8).png"
            />
          </header.logo> */}
          <header.logo>Green Market</header.logo>
          <header.MainMenu>
            <header.MenuLabel>Product</header.MenuLabel>
            <header.MenuLabel>Map</header.MenuLabel>
          </header.MainMenu>
          <header.Search>
            <header.SearchTitle
              onChange={onChangeSearch}
              type="text"
              placeholder="상품이나 지역을 검색해보세요"
            />
            {/* <header.searchBtn onClick={movePage("list")} /> */}
          </header.Search>
          <header.User>
            <header.UserLabel onClick={movePage("signIn")}>
              {acessToken ? "로그아웃" : "로그인"}
            </header.UserLabel>
            <header.UserLabel onClick={movePage("signUp")}>
              {acessToken ? "마이페이지" : "회원가입"}
            </header.UserLabel>
          </header.User>
          {/* <header.UserInfo onClick={movePage("signUp")}> */}
          {/* {acessToken ? data?.fetchUserLoggedIn?.name + "님 안녕하세요" : ""} */}
          {/* </header.UserInfo> */}
        </header.Inner>
      </header.Menu>
    </>
  );
}
