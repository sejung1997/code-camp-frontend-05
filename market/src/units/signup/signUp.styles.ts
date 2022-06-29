import styled from "@emotion/styled";

export const InputWrapper = styled.form``;
export const label = styled.span`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const Titlelabel = styled.div`
  font-size: 35px;
  margin: 50px;
  font-weight: bold;
  text-align: center;
  color: green;
`;
export const Main = styled.div`
  width: 800px;
  border: 1px solid green;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  margin: 200px auto;
`;

export const ErrMsg = styled.div`
  font-size: 9px;
  color: red;
`;
export const PayBtn = styled.button`
  width: 120px;
  height: 40px;
`;
export const userImg = styled.img`
  width: 120px;
  height: 120px;
  margin-left: 15px;
`;
interface Ihide {
  isHide: boolean;
}
export const BuyList = styled.div<Ihide>`
  font-size: 11px;
  margin-bottom: 50px;
  display: ${(props) => (props.isHide ? "none" : "block")};
`;
export const SoldList = styled.div<Ihide>`
  font-size: 11px;
  margin-bottom: 50px;
  display: ${(props) => (props.isHide ? "none" : "block")};
`;
export const toggle = styled.div`
  font-size: 30px;
`;
export const listWrapper = styled.div`
  border: 0.5px solid green;
  padding: 10px 5px;
  margin-bottom: 50px;
  border-radius: 5px;
`;
export const Input = styled.input``;
