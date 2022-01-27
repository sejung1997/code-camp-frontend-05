import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";

export const Main = styled.div`
  width: 1200px;
  position: absolute;
  margin: 200px auto;
  right: 0;
  left: 0;
  border: 1px solid #fff;
  font-family: sans-serif;
  padding: 0 102px 180px;
  color: #fff;
`;
export const Name = styled.div`
  font-size: 24px;
  padding-bottom: 2px;
`;
export const Baner = styled.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #fff;
  padding-top: 88px;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 80px;
`;
export const MainImg = styled.div`
  margin-top: 40px;
  width: 996px;
  height: 486px;
  background-color: transparent;
`;
export const Contents = styled.div`
  width: 996px;
  height: 96px;
  background-color: transparent;
  margin-top: 40px;
`;
export const Video = styled.div`
  margin: 120px auto;
  display: flex;
  justify-content: center;
`;
export const Day = styled.div`
  font-size: 16px;
`;
export const Profile = styled.div`
  display: flex;
  padding-top: 80px;
`;

export const Good = styled.div``;
export const Bad = styled.div``;
export const ProfileImg = styled.div`
  width: 46px;
  height: 46px;
  background-color: transparent;
`;
export const AddressInfo = styled.div`
  padding: 20px 16px 20px 0;
`;
export const Address = styled.div`
  background-color: #828282;
  color: white;
  padding: 8px 16px;
`;
export const ButtonUpdate = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 24px;
  display: block;
  background-color: transparent;
  border-radius: 7px;
  font-weight: bold;

  border: 1px solid #fff;

  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;
export const ButtonList = styled.button`
  width: 179px;
  height: 52px;
  display: block;
  background-color: transparent;
  border: 1px solid #fff;
  font-weight: bold;

  border-radius: 7px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;

export const buttonGroup = styled.div`
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  display: flex;
`;
export const Like = styled.div`
  display: flex;
  justify-content: center;
`;
export const Up = styled.div`
  font-size: 18px;
  margin-right: 40px;
  color: #fff;
`;
export const Down = styled.div`
  font-size: 18px;
  color: #fff;
`;
export const LikeOut = styled(LikeOutlined)`
  font-size: 25px;
  padding-botom: 15px;
  :hover {
    cursor: pointer;
  }
`;

export const DislikeOut = styled(DislikeOutlined)`
  font-size: 25px;
  :hover {
    cursor: pointer;
  }
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  margin-top: 15px;
`;
export const pri = styled.div`
  width: 847px;
  padding-bottom: 30px;
`;
