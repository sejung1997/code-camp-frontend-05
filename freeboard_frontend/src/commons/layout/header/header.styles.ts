import styled from "@emotion/styled";
import { IAddressProps } from "./header.types";

export const Menu = styled.div`
  background-color: red;
  font-size: 23px;
  right: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2;
`;
export const H2 = styled.div`
  font-size: 35px;
  background-color: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 76px;
  z-index: 2;
`;

export const H3 = styled.div`
  color: #fff;
  width: 200px;
  padding: 20px 10px;
  text-align: center;
  background-color: ${(props: IAddressProps) =>
    props.address.length === 25 ? "black" : ""};
  :hover {
    background-color: black;
    cursor: pointer;
  }
`;
export const H3M = styled.div`
  color: #fff;
  width: 200px;
  padding: 20px 10px;
  text-align: center;
  :hover {
    background-color: black;
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
    background-color: black;
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
    background-color: black;
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
    background-color: black;
    cursor: pointer;
  }
`;
