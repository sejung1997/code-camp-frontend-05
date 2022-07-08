import * as header from "./header.styles";
import { useMovePage } from "../../function/movePage";
import { useContext, useState, ChangeEvent, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { FETCH_USER_LOGGED_IN } from "./types&gql";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import { useRouter } from "next/router";

export default function HeaderPage(props) {
  const router = useRouter();
  const { acessToken } = useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const movePage = useMovePage();
  let domain;
  if (process.browser) domain = window.location.pathname;
  const getDebounce = _.debounce((keyData) => {
    props.setKeyword(keyData);
  }, 1000);

  useEffect(() => {
    console.log(domain);
  }, [domain]);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    setTimeout(() => {
      router.push("/list");
    }, 2000);
    console.log(event.target.value);
  };

  return (
    <>
      <header.Menu>
        <header.Inner>
          <header.logo onClick={movePage("")}>Green Market</header.logo>
          <header.MainMenu>
            <header.MenuLabel
              onClick={movePage("list")}
              isMapPage={domain === "/List/"}
            >
              Product
            </header.MenuLabel>
            <header.MenuLabel
              onClick={movePage("map")}
              isMapPage={domain === "/map/"}
            >
              Map
            </header.MenuLabel>
          </header.MainMenu>
          <header.Search>
            <header.SearchTitle
              onChange={onChangeSearch}
              type="text"
              placeholder="상품이나 지역을 검색해보세요"
            />
          </header.Search>
          <header.User>
            <header.UserLabel onClick={movePage("signIn")}>
              {acessToken ? "로그아웃" : "로그인"}
            </header.UserLabel>
            <header.UserLabel onClick={movePage("signUp")}>
              {acessToken ? "마이페이지" : "회원가입"}
            </header.UserLabel>
          </header.User>
        </header.Inner>
      </header.Menu>
    </>
  );
}
