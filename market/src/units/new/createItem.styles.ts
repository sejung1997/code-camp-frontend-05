import styled from "@emotion/styled";
import DaumPostcode from "react-daum-postcode";

export const Main = styled.div`
  width: 800px;
  padding: 60px 103px 100px 101px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  font-family: sans-serif;
  margin: 150px auto;
  border: 1px solid green;
  border-radius: 5px;
  right: 0;
  left: 0;
`;
export const Input02 = styled.input`
  width: 300px;
  height: 40px;
  border: 0.2px solid green;
  border-radius: 5px;
  padding-left: 10px;
  &:focus {
    outline: 1px solid green;
  }
`;
export const ErrorMsg = styled.div``;
export const tagContents = styled.span`
  border-radius: 10px;
  border: 1px solid green;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const TopTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  margin-bottom: 40px;
`;
export const WritterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const OptionWrapper = styled.div`
  margin-top: 40px;
`;
export const contentsWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 40px;
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
  border: 1px solid green;
  &::placeholder {
    color: green;
  }
  border-radius: 5px;
`;
export const InputTitle = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 5px;
  &::placeholder {
    color: green;
  }
  padding-left: 16px;
`;
export const InputContent = styled.textarea`
  width: 100%;
  height: 480px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 5px;
  padding: 14px;
  &::placeholder {
    color: green;
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
  border: 1px solid green;
  border-radius: 5px;

  &::placeholder {
    color: green;
  }
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;
export const SearchBtn = styled.button`
  background-color: transparent;
  color: green;
  padding: 14px 16px;
  border: 2px solid green;
  border-radius: 5px;
  font-weight: bold;
  height: 50px;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: green;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-bottom: 30px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: transparent;
  &::placeholder {
    color: green;
  }
`;
export const InputYoutube = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  background-color: transparent;
  &::placeholder {
    color: green;
  }
`;
export const YoutubeWrapper = styled.div`
  padding-top: 7px;
`;

export const BoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(78px * 6 + 24px * 5);
`;
export const InputMain = styled.input`
  width: 20px;
  background-color: transparent;

  height: 20px;
  margin: 2px 10px 0 0;
  border: 1px solid green;
  &::placeholder {
    color: green;
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
  border: 2px solid green;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: green;
  }
  margin-right: 24px;
  background-color: transparent;
  color: green;

  border-radius: 5px;
`;
export const BottomCancel = styled.button`
  width: 179px;
  height: 52px;
  border-radius: 5px;
  background-color: transparent;
  font-weight: bold;
  border: 2px solid green;
  :hover {
    cursor: pointer;
    color: #fff;
    background-color: green;
  }
  color: green;
`;
export const Postcode = styled(DaumPostcode)``;
