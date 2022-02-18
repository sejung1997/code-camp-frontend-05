import styled from "@emotion/styled";
import Inner from "../../inner/index";
import { GlobalContext } from "../../../../pages/_app";
import { useMovePage } from "../../function/movePage";
import { useContext } from "react";
export default function HeaderPage() {
  const Menu = styled.div`
    height: 150px;
    background-color: green;
    width: 100%;
  `;
  const SignIn = styled.div`
    font-size: 30px;
    color: #fff;
    margin-right: 20px;
    :hover {
      color: #fff;
      cursor: pointer;
    }
  `;
  const MenuWrapper = styled.div`
    display: flex;
  `;
  const { userInfo } = useContext(GlobalContext);
  console.log(userInfo);
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
          </MenuWrapper>
        </Inner>
      </Menu>
    </>
  );
}
