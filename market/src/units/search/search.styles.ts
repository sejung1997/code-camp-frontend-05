import styled from "@emotion/styled";

export const Main = styled.div`
  width: 100%;
  height: 740px;
  background-color: #fffaf0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const section = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Select = styled.div`
  display: flex;
  padding-top: 100px;
`;
export const Text = styled.div`
  font-size: 16px;

  padding-top: 70px;
  h4 {
    font-size: 22px;
    color: #3cb371;
  }
  div {
    padding-left: 40px;
    padding-top: 40px;
  }
  select {
    margin-left: 8px;
    outline: none;
    padding: 3px 5px;
    background-color: #fff;
    margin-bottom: 60px;
  }
`;

export const Result = styled.div`
  position: relative;
`;
export const ScrollTop = styled.div`
  font-size: 35px;
  position: absolute;
  right: -200px;
  bottom: 100px;
  :hover {
    cursor: pointer;
  }
`;
