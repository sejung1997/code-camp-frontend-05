import styled from "@emotion/styled";
// import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { EditTwoTone, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons";

export const div = styled.div`
  padding-top: 150px;
`;
export const Main = styled.div`
  width: 1200px;
  margin: auto;
  right: 0;
  left: 0;

  border: 1px solid green;
  font-family: sans-serif;
  padding: 0 102px 80px;
  color: green;
`;
export const Name = styled.div`
  font-size: 24px;
  padding-bottom: 2px;
`;
export const Baner = styled.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid green;
  padding-top: 88px;
  position: relative;
`;
export const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  padding-top: 80px;
`;
export const MainImg = styled.img`
  margin-top: 40px;
  width: 200px;
  height: 200px;
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
  position: absolute;
  right: 10px;
  top: 20px;
  text-align: end;
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

  border: 1px solid green;

  :hover {
    cursor: pointer;
    color: black;
    background-color: green;
  }
`;
export const ButtonList = styled.button`
  width: 179px;
  height: 52px;
  display: block;
  background-color: transparent;
  border: 1px solid green;
  font-weight: bold;
  margin-right: 24px;

  border-radius: 7px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: green;
  }
`;

export const buttonGroup = styled.div`
  margin: 150px auto 0;
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  display: flex;
  color: green;
  font-size: 18px;
`;
export const Like = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100px;
`;
export const Up = styled.div`
  font-size: 23px;
  margin-right: 40px;
  color: green;
`;
export const Down = styled.div`
  font-size: 23px;
  color: green;
`;
// export const LikeOut = styled(LikeOutlined)`
//   font-size: 30px;
//   margin-right: 20px;
//   padding-bottom: 15px;

//   :hover {
//     cursor: pointer;
//   }
// `;

// export const DislikeOut = styled(DislikeOutlined)`
//   font-size: 30px;
//   :hover {
//     cursor: pointer;
//   }
// `;
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
export const ButtonDelete = styled.button`
  width: 179px;
  height: 52px;
  display: block;
  background-color: transparent;
  border: 1px solid green;
  font-weight: bold;
  color: green;
  border-radius: 7px;
  :hover {
    cursor: pointer;
    color: black;
    background-color: green;
  }
`;
export const HeartIcon = styled(HeartTwoTone)`
  font-size: 40px;
  color: green;
  margin-left: 10px;

  & path {
    stroke: green;
  }
`;
export const EditIcon = styled(EditTwoTone)`
  font-size: 40px;
  stroke: green;
  margin-left: 10px;
  & :hover {
    stroke: green;
  }
  & path {
    stroke: green;
  }
  & svg {
    stroke: green;
  }
`;

export const DeleteIcon = styled(DeleteTwoTone)`
  font-size: 40px;
  color: green;
  margin-left: 10px;
  & path {
    stroke: green;
  }
  & svg {
    stroke: green;
  }
`;
