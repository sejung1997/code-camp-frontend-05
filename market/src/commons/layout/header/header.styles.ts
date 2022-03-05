import styled from "@emotion/styled";

export const Menu = styled.div`
  height: 150px;
  background-color: green;
  width: 100%;
`;
export const SignIn = styled.div`
  font-size: 15px;
  color: #fff;
  padding: 15px 0 10px 30px;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const MenuTitle = styled.div`
  font-size: 30px;
  color: #fff;
  padding: 10px 60px 10px 0;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 80px;
`;
export const subMenu = styled.div`
  right: 0;
  display: flex;
  position: absolute;
`;
export const TodayProduct = styled.div`
  position: fixed;
  right: 10px;
  width: 150px;
  padding: 30px 15px;
  top: 150px;
  color: black;
  border: 1px solid green;
  border-radius: 5px;
  height: 800px;
  overflow: auto;
`;
export const TodayLabel = styled.div`
  font-size: 20px;
  color: green;
`;
export const DataWrapper = styled.div`
  display: flex;
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
  top: 90px;
  position: absolute;
`;
export const Point = styled.div`
  font-size: 17px;
  position: absolute;
  color: #fff;
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
