import styled from "@emotion/styled";
import { breakPoints } from "../../commons/styles/media";
interface IIsMap {
  isMap: boolean;
}
export const Promotion = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: #fffaf0;
  display: flex;
  justify-content: center;
`;
export const Product = styled.div`
  padding-top: 60px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
export const SliderWrapper = styled.div``;

export const Text = styled.div`
  font-size: 40px;
  margin-top: 140px;
  color: #464646;
  margin-left: 90px;
  @media ${breakPoints.tablet} {
    font-size: 30px;
  }
  @media ${breakPoints.mobile} {
    font-size: 18px;
  }
`;
export const SubText = styled.div`
  margin-top: 50px;
  font-size: 18px;
`;
export const Section = styled.div<IIsMap>`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.isMap ? "60px 0" : "")};
  width: calc(100% - 30px);
  max-width: 1000px;
  height: ${(props) => (props.isMap ? "640px" : "540px")};
`;
export const ProductSection = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 30px;
  }
`;
export const SlideSection = styled.div`
  width: 1000px;
  .slick-slide.slick-active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-slider {
    border: 1px solid #fff;
  }
  .slick-list {
    margin-bottom: 20px;
  }
  ul.slick-dots {
    padding-top: 55px;
    button::before {
      font-size: 15px;
      color: #3cb371;
    }
  }
  .slick-prev::before,
  .slick-next::before {
    color: #3cb371 !important;
    font-size: 25px;
    opacity: 0.5;
    position: absolute;
    top: -49px;
  }
`;
export const Map = styled.div`
  margin-top: 80px;
  margin-right: -50px;
  position: relative;
`;

export const Contents = styled.div`
  position: relative;
  margin-top: 50px;
  margin-right: 60px;
  .map {
    height: 420px;
  }
  .fade {
    opacity: 0;
  }
  .grain {
    width: 120px;
    left: 80px;
    bottom: 220px;
  }
  .fish {
    right: -30px;
    bottom: 150px;
  }
  .flout {
    width: 110px;
    right: 0px;
    top: 50px;
  }
  .meat {
    left: -20px;
    top: 100px;
  }
  .veg {
    bottom: 100px;
    left: 20px;
  }
`;
export const product = styled.img`
  width: 115px;
  z-index: 4;
  position: absolute;
`;
export const Column = styled.div`
  padding: 20px 10px;
  overflow: hidden;
  border-radius: 5px;
  font-size: 20px;
  width: 280px !important;
  & .slick-slider {
    /* width: 100%; */
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const topTitle = styled.div`
  font-size: 35px;
  text-align: center;
  color: green;
`;
interface Imatch {
  isMatched: boolean;
}
export const word = styled.span<Imatch>`
  color: ${(props) => (props.isMatched ? "red" : "green")};
`;

export const List = styled.div`
  width: 1050px;
  right: 0;
  left: 0;
  margin-top: 60px;
  // border-bottom: 1px solid green;
`;

export const Title = styled.div`
  color: #464646;
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
export const play = styled.div`
  padding-top: 100px;
  left: 0;
  right: 0;
  width: 1024px;
  display: flex;
  justify-content: center;
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
  padding-left: 10px;
`;
export const SearchBtn = styled.button`
  padding: 14px 16px;
  background-color: transparent;
  color: green;
  :hover {
    cursor: pointer;
    color: red;
    background-color: green;
  }
  border-radius: 5px;
`;
export const images = styled.img``;
export const SliderItem = styled.img`
  margin-bottom: 10px;
  width: 100%;
  height: 280px;
`;
export const doName = styled.div`
  position: absolute;
  font-size: 18px;
  left: 30px;
  top: 20px;
  z-index: 12;
`;
