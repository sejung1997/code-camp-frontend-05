import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import { keyframes } from "@emotion/react";
import { stubArray } from "lodash";
export const Menu = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
`;
export const Inner = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
export const MainMenu = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  margin-top: 6px;
  font-size: 18px;
  color: #9acd32;
  display: flex;
`;
export const MenuLabel = styled.div`
  font-size: 16px;
  margin-right: 10px;
  color: #2e8b57;
`;
export const logo = styled.h1`
  color: #3cb371;
  font-size: 25px;
  font-weight: 500;
  margin: 0;
`;
export const UserLabel = styled.div`
  margin-right: 10px;
  margin-top: 3px;

  :hover {
    color: black;
    cursor: pointer;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const SearchTitle = styled.input`
  transition: 0.4s;
  border-radius: 5px;
  border: none;
  color: red !important;
  width: 180px;
  height: 40px;
  background-color: #f8f8ff;
  padding: 0 0 0 10px;
  &:focus {
    width: 300px;
    outline: 0;
  }
`;

export const searchBtn = styled(SearchOutlined)`
  font-size: 20px;
  margin-top: 3px;
  right: 0;
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

export const logoImg = styled.img`
  height: 50px;
`;
export const User = styled.div`
  margin-left: 20px;
  margin-right: 10px;
  font-size: 14px;
  display: flex;
`;
