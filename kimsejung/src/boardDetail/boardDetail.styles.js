import styled from "@emotion/styled";
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
