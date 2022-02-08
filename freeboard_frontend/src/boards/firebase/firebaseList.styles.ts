import styled from "@emotion/styled";
import DaumPostcode from "react-daum-postcode";

export const Main = styled.div`
  width: 1200px;

  border: 1px, solid, #fff;
  position: absolute;
  margin: 150px auto;
  border: 1px solid #fff;
  border-radius: 5px;
  right: 0;
  left: 0;
  top: 2000px;
  color: #fff;
`;
export const TopTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
`;
export const wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const OptionWrapper = styled.div`
  padding-top: 40px;
`;
export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 16px 0;
`;
export const InputName = styled.input`
  width: 486px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  border: 1px solid #fff;
  &::placeholder {
    color: #fff;
  }
  border-radius: 5px;
`;
export const InputTitle = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  &::placeholder {
    color: #fff;
  }
  padding-left: 16px;
`;
export const InputContent = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 14px;
  &::placeholder {
    color: #fff;
  }
`;
export const AddressWrapper = styled.div`
  padding-top: 16px;
`;

export const InputNum = styled.input`
  width: 77px;
  height: 52px;
  margin-right: 16px;
  margin-bottom: 16px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;

  &::placeholder {
    color: #fff;
  }
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;
export const SearchBtn = styled.button`
  background-color: transparent;
  color: #fff;
  padding: 14px 16px;
  border: 2px solid #fff;
  border-radius: 5px;
  font-weight: bold;
  height: 50px;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: transparent;
  &::placeholder {
    color: #fff;
  }
`;
export const InputYoutube = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  background-color: transparent;
  &::placeholder {
    color: #fff;
  }
`;
export const YoutubeWrapper = styled.div`
  padding-top: 7px;
`;
export const Box = styled.div`
  width: 78px;
  height: 78px;
  background-color: transparent;
  text-align: center;
  padding-top: 23px;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;
export const BoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(78px * 3 + 24px * 2);
`;
export const InputMain = styled.input`
  width: 20px;
  background-color: transparent;

  height: 20px;
  margin: 2px 10px 0 0;
  border: 1px solid #fff;
  &::placeholder {
    color: #fff;
  }
  border-radius: 5px;
`;
export const Youtube = styled.span`
  margin-right: 20px;
`;
export const BottomButton = styled.div`
  margin: 82px auto 0 auto;
  width: 388px;
  display: flex;
  justify-content: center;
`;
export const Erro = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 10px;
  font-weight: 700;
  position: absolute;
`;
export const BottomSubmit = styled.button`
  width: 179px;
  height: 52px;
  font-weight: bold;
  border: 2px solid #fff;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
  margin-right: 24px;
  background-color: transparent;
  color: #fff;

  border-radius: 5px;
`;
export const BottomCancel = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 5px;
  background-color: transparent;
  font-weight: bold;
  border: 2px solid #fff;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
  color: #fff;
`;
export const Postcode = styled(DaumPostcode)``;
