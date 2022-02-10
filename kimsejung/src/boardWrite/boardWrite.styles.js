import styled from "@emotion/styled";

export const Main = styled.div`
  border: 1px solid grey;
  width: 1120px;
  padding: 50px 40px;
  position: relative;
  margin-bottom: 20px;

  ${(props) => (props.isEdit ? "" : "margin-left: 180px;")}
`;
export const label = styled.div`
  font-size: 20px;
  color: purple;
  padding-bottom: 10px;
`;

export const inputTitle = styled.input`
  width: 100%;
  margin-bottom: 30px;
`;

export const inputContents = styled.textarea`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
`;

export const inputFile = styled.input``;

export const box = styled.div``;
export const submit = styled.button`
  font-size: 30px;
  text-align: center;
  padding: 5px 100px;
  color: purple;
  font-weight: bold;
  border-radius: 10px;
  position: absolute;
  margin: 0 auto;
  right: 0;
  left: 0;
  bottom: 30px;
`;
