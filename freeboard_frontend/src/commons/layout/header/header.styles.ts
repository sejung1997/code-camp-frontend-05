import styled from "@emotion/styled";
import { IAddressProps } from "./header.types";

export const Menu = styled.div`
  background-color: black;
  width: 100%;
  height: 120px;
  z-index: 2;
  position: fixed;
`;

export const logo = styled.img`
  margin: auto;
  top: 0;
  bottom: 0;
  left: 5%;
  position: absolute;
  height: 100px;
  :hover {
    cursor: pointer;
  }
`;
export const inner = styled.div`
  width: 1500px;
  height: 100%;
  right: 0;
  position: relative;
  left: 0;
  margin: 0 auto;
  > div {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
export const mainMenu = styled.div`
  font-size: 20px;
  /* background-color: red; */
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const signBtn = styled.div`
  color: #fff;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 10px;
  margin-right: 100px;
  text-align: center;
  :hover {
    background-color: red;
    cursor: pointer;
  }
  /* background-color: ${(props: IAddressProps) =>
    props.isVisible ? "black" : ""}; ; */
`;

export const H3 = styled.div`
  color: #fff;
  width: 200px;
  padding: 20px 10px;

  text-align: center;
  background-color: ${(props: IAddressProps) =>
    props.address.length === 25 ? "black" : ""};
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;
export const H3N = styled.div`
  color: #fff;
  width: 200px;

  padding: 20px 10px;
  text-align: center;
  background-color: ${(props: IAddressProps) =>
    props.address[1] === "N" ? "black" : ""};
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

export const H3L = styled.div`
  color: #fff;
  width: 200px;
  padding: 20px 10px;
  text-align: center;
  background-color: ${(props: IAddressProps) =>
    props.address[1] === "b" ? "black" : ""};
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;
export const H3E = styled.div`
  color: #fff;
  width: 200px;
  padding: 20px 10px;
  text-align: center;
  background-color: ${(props: IAddressProps) =>
    props.address[props.address.length - 2] === "i" ? "black" : ""};
  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  padding: 50px 50px 80px;
  border: 1px solid #fff;
  margin-left: 30px;
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
  margin-bottom: 25px;
  width: 300px;
  /* margin-right: 30px; */
  color: grey;
`;
export const validBtn = styled.button`
  width: 100px;
  height: 30px;
  right: 0;
  top: 30px;
  position: absolute;
`;
export const password = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
`;
export const validId = styled.div``;
export const validPs = styled.div``;

export const name = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
  margin-bottom: 25px;
`;
export const number = styled.input`
  margin-top: 10px;
  padding-left: 10px;
  width: 300px;
  color: grey;
  margin-bottom: 50px;
`;
export const registerBtn = styled.button`
  width: 200px;
  margin: auto;
  right: 0;
  position: absolute;
  left: 0;
`;
