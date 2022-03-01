import styled from "@emotion/styled";

export const Menu = styled.div`
  height: 150px;
  background-color: green;
  width: 100%;
`;
export const SignIn = styled.div`
  font-size: 30px;
  color: #fff;
  padding: 10px 30px;
  :hover {
    color: black;
    cursor: pointer;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  position: relative;
`;
export const TodayProduct = styled.div`
  position: fixed;
  right: 10px;
  padding: 20px;
  top: 150px;
  color: black;
  border: 1px solid green;
  border-radius: 5px;
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
  left: 0;
`;
export const UserInfo = styled.div`
  font-size: 20px;
  position: absolute;
  color: #fff;
  right: 0;
  bottom: -50px;
`;
export const Point = styled.div`
  font-size: 20px;
  position: absolute;
  color: #fff;
  right: 0;
`;
