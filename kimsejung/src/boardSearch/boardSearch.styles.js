import styled from "@emotion/styled";

export const Main = styled.div`
  margin-left: 100px;
  border: 1px solid grey;
  width: 1200px;
  padding: 50px 40px;
  position: relative;
`;
export const label = styled.div`
  font-size: 20px;
  color: purple;
`;

export const wrapper = styled.div``;

export const inputContents = styled.input``;

export const SliderItem = styled.img`
  height: 250px;
  display: block;
  margin: auto;
  right: 0;
  left: 0;
`;

export const planet = styled.div``;
export const wrapperSlide = styled.div`
  /* background-color: black; */
  padding: 100px 50px;
  border: none;
  /* background-color: rgba(255, 255, 255, 0); */
`;
export const WrapperS = styled.div`
  background: purple;
  padding: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Search = styled.input`
  height: 40px;
  width: 500px;
`;
export const BtnSearch = styled.button`
  height: 40px;
  cursor: pointer;
  margin-left: 20px;
  font-size: 20px;
  width: 50px;
`;
export const Word = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;
export const wrapperList = styled.div`
  border: 1px solid grey;
  padding: 20px 30px;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
`;
export const title = styled.div`
  padding: 0 0 0 10px;
  flex-grow: 1;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;
export const date = styled.div``;
export const contents = styled.div``;
export const detail = styled.div`
  margin-top: 20px;
  ${(props) => (props.isHide ? "display:none" : "display:block")}
`;
export const header = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const imgBox = styled.div`
  margin-top: 10px;
`;

export const img01 = styled.img`
  width: 100px;
  margin-right: 10px;
  ${(props) => (props.imgUrl ? "display:inline" : "display:none")}
`;
export const btnGroup = styled.div`
  position: absolute;
  right: 0;
  bottom: 10px;
`;
export const btnUpdate = styled.button`
  width: 80px;
  height: 30px;
  color: purple;
`;
export const btnDelete = styled.button`
  width: 80px;
  height: 30px;
  color: purple;
  margin-right: 10px;
`;
export const toggleBtn = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
