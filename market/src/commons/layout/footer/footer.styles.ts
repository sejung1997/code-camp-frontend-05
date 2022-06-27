import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";

export const Main = styled.div`
  width: 100%;
  background-color: #969696;
  display: flex;
  justify-content: center;
`;
export const Inner = styled.div`
  width: calc(100% - 30px);
  max-width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: column;
  display: flex;
  margin-top: 120px;
  position: relative;
  &::nth-child(1) {
    border-bottom: 1px solid #ccc;
  }
`;
export const MainMenu = styled.div`
  margin-left: 80px;
  margin-top: 6px;
  flex-direction: column;
  font-size: 18px;
  display: flex;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  font-size: 12px;
  color: #ccc;
`;
export const MenuLabel = styled.div`
  font-size: 16px;
  margin-right: 10px;
  color: #f5f5f5;
`;
export const logo = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin: 0;
  flex-grow: 1;
  color: #f5f5f5;
`;
export const UserLabel = styled.div`
  margin: 5px 30px 10px 5px;

  background-color: red;
  font-family: sans-serif;
  margin-top: 3px;
  font-size: 10px;
  color: #ccc;
`;
