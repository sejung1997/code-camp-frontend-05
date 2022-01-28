import styled from "@emotion/styled";

export const Column = styled.div`
  width: 300px;
  text-align: center;
  height: calc(583px / 11);
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;
export const Row = styled.div`
  display: flex;
`;
export const TopRow = styled.div`
  display: flex;
  height: calc(583px / 11);
  border-top: 1px solid #fff;
`;
export const List = styled.div`
  width: 1200px;
  position: absolute;
  right: 0;
  left: 0;
  margin: 230px auto;
  // border-bottom: 1px solid #fff;
`;

export const Button = styled.button`
  margin-top: 140px;
  width: 270px;
  hegiht: 51px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
`;
export const Title = styled.span`
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;
export const Search = styled.div`
  position: absolute;
  margin: 120px auto;
  left: 0;
  right: 0;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;
export const SearchTitle = styled.input`
  width: 776px;
  height: 52px;
  &::placeholder {
    color: #fff;
  }
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding-left: 10px;
`;
export const SearchYear = styled.input`
  height: 52px;
  width: 224px;
  &::placeholder {
    color: #fff;
  }
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding-left: 10px;
`;
export const SearchBtn = styled.button`
  padding: 14px 16px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  :hover {
    cursor: pointer;
    color: red;
    background-color: #fff;
  }
  border-radius: 5px;
`;
