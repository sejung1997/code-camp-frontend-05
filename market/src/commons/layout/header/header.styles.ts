import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import { stubArray } from "lodash";
export const Menu = styled.div`
  background-image: url("/images/NNhFby-700x376.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
`;

export const SignIn = styled.div`
  font-size: 14px;
  color: #fff;
  padding: 15px 0 10px 30px;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const MenuTitle = styled.div`
  font-size: 25px;
  color: #fff;
  padding: 10px 60px 5px 0;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const Search = styled.div`
  /* margin: 250px auto 100px auto; */

  left: 0;
  right: 0;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

// export const SearchTitle = styled.input`
/* width: 40px;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding-left: 10px;
  transition: 2s; */

// `;
export const SearchTitle = styled.input`
  transition: 0.4s;
  border-radius: 5px;

  color: #333;
  width: 50px;
  border: 1px solid #fff;
  padding-left: 10px;
  &:focus {
    width: 200px;
  }
`;

export const searchBtn = styled(SearchOutlined)`
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 10px;
`;

export const SmallBtn = styled.button`
  width: 100px;
  border: 0.5px solid green;
  background-color: #fff;
  color: green;
  border-radius: 3px;
  margin: 7px 0;
  :hover {
    color: #fff;
    background-color: green;
    cursor: pointer;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 200px;
  bottom: 0;
`;
export const logo = styled.div`
  height: 120px;
  margin: auto;
  top: 0;
  bottom: 0;
  position: absolute;
`;
export const logoImg = styled.img`
  height: 120px;
`;
export const subMenu = styled.div`
  right: 0;
  display: flex;
  border: 1px solid red;
  position: absolute;
`;
export const TodayProduct = styled.div`
  position: fixed;
  right: 50px;
  width: 150px;
  padding: 30px 15px;
  top: 170px;
  color: black;
  border: 1px solid green;
  border-radius: 5px;
  overflow: auto;
  max-height: 800px;
`;
export const TodayLabel = styled.div`
  font-size: 20px;
  color: green;
  text-align: center;
`;
export const DataWrapper = styled.div`
  display: flex;
  left: 0;
  right: 0;
  width: 100px;
  margin: 0 auto;

  flex-direction: column;
`;
export const Img = styled.img`
  width: 100px;
  height: 100px;
  left: 0;
  margin: 10px 0;
`;
export const UserInfo = styled.div`
  font-size: 17px;
  color: #fff;
  right: 0;
  bottom: 25px;
  position: absolute;
`;
export const Point = styled.div`
  font-size: 17px;
  position: absolute;
  color: #fff;
  right: 0;
`;
