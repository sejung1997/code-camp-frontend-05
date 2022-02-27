import styled from "@emotion/styled";

export const Column = styled.div`
  width: 600px;

  text-align: center;
  /* height: calc(583px / 11); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: green;
  font-size: 20px;
`;
export const Row = styled.div`
  display: flex;
  height: 600px;
  width: 1500px;
  justify-content: space-between;
`;
export const word = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "green")};
`;
export const TopRow = styled.div`
  display: flex;
  height: calc(583px / 11);
  border-top: 1px solid green;
`;
export const List = styled.div`
  width: 1200px;
  position: absolute;
  right: 0;
  left: 0;
  margin: 230px auto;
  // border-bottom: 1px solid green;
`;

export const Button = styled.button`
  margin-top: 140px;
  width: 270px;
  height: 51px;
  background-color: transparent;
  border: 1px solid green;
  border-radius: 5px;
  font-size: 20px;
  color: green;
  :hover {
    cursor: pointer;
    color: red;
    background-color: green;
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
  color: green;
`;
export const SearchTitle = styled.input`
  width: 776px;
  height: 52px;
  &::placeholder {
    color: green;
  }
  border-radius: 5px;
  background-color: transparent;
  color: green;
  border: 1px solid green;
  padding-left: 10px;
`;
export const SearchYear = styled.input`
  height: 52px;
  width: 224px;
  &::placeholder {
    color: green;
  }
  border-radius: 5px;
  background-color: transparent;
  color: green;
  border: 1px solid green;
  padding-left: 10px;
`;
export const SearchBtn = styled.button`
  padding: 14px 16px;
  background-color: transparent;
  color: green;
  border: 1px solid green;
  :hover {
    cursor: pointer;
    color: red;
    background-color: green;
  }
  border-radius: 5px;
`;
export const images = styled.img``;
export const SliderItem = styled.img`
  height: 500px;
  width: 500px;
  display: block;
  margin: 0 auto;
  right: 0;
  left: 0;
`;

export const planet = styled.div`
  display: flex;
`;
