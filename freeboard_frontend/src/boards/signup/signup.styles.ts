import styled from "@emotion/styled";

export const Main = styled.div`
  padding: 50px 50px 80px;
  border: 1px solid #fff;
  width: 520px;
  background-color: #fff;
  font-weight: bold;
  border-radius: 5px;
  position: relative;
`;
export const topTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 35px;
  text-align: center;
`;
export const inputs = styled.div`
  position: relative;
`;
export const id = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 150px;
  /* margin-right: 30px; */
  color: grey;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
`;
export const inputdomain = styled.input`
  width: 150px;
  color: grey;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
  margin-right: 17px;
`;
export const domainAddress = styled.select`
  color: grey;

  border: 1px solid grey;

  height: 30px;
`;
export const validBtn = styled.button`
  width: 100px;
  height: 30px;
  right: 0;
  top: 70px;
  position: absolute;
  border-radius: 5px;
  font-size: 12px;
  background-color: #6482b9;
  color: #fff;
  border: none;

  :hover {
    cursor: pointer;
    background-color: #3c5087;
  }
`;
export const password = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
`;
export const validId = styled.div`
  margin-bottom: 20px;
  padding: 5px 3px;
  font-size: 9px;
  color: #6482b9;
`;
export const validPs = styled.div`
  margin-bottom: 20px;
  padding: 5px 3px;
  font-size: 9px;
  color: red;
`;

export const name = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
  margin-bottom: 25px;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
`;
export const number = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
  border: 1px solid grey;
  border-radius: 2px;
  height: 30px;
`;
export const registerBtn = styled.button`
  width: 200px;
  margin: auto;
  right: 0;
  position: absolute;
  left: 0;
`;
export const ButtonBack = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 15px;
  border-radius: 5px;
  border: none;
  background-color: #6482b9;
  :hover {
    cursor: pointer;
    background-color: #3c5087;
  }
  color: #fff;
`;
export const ButtonRegister = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #6482b9;
  color: #fff;
  :hover {
    ${(props) =>
      props.isValid ? "cursor: pointer;background-color: #3c5087;" : "none"}
  }

  ${(props) =>
    props.isValid
      ? "background-color: #6482b9;"
      : "background-color: #fff;color:#ccc"};
`;
