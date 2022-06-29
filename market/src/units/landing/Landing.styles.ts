import styled from "@emotion/styled";

export const Promotion = styled.div`
  width: 100%;
  margin-top: 80px;
  background-color: #fffaf0;
  display: flex;
  justify-content: center;
`;
export const Product = styled.div`
  padding-top: 80px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;
export const SliderWrapper = styled.div``;

export const Text = styled.div`
  font-size: 30px;
  margin-top: 220px;
  margin-left: 100px;
  .div {
    font-size: 20px;
  }
`;
export const SubText = styled.div`
  font-size: 20px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 1200px;
  height: 700px;
`;
export const ProductSection = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 1000px;
  height: 400px;
  h3 {
    font-size: 30px;
    position: absolute;
  }
`;
export const SlideSection = styled.div`
  width: 600px;
  background-color: red;
`;

export const Contents = styled.div`
  position: relative;
  margin-top: 80px;
  margin-right: 150px;
  .map {
    height: 500px;
  }
  .fade {
    opacity: 0;
  }
  .grain {
    left: 100px;
    bottom: 320px;
  }
  .fish {
    right: -20px;
    bottom: 220px;
  }
  .flout {
    width: 120px;
    right: 0px;
    top: 50px;
  }
  .meat {
    left: 0px;
    top: 100px;
  }
  .veg {
    bottom: 190px;
    left: 0px;
  }
`;
export const product = styled.img`
  width: 130px;
  z-index: 4;
  position: absolute;
`;
export const Column = styled.div`
  border: 2px solid green;
  padding: 20px 10px;
  border-radius: 5px;

  text-align: center;
  /* height: calc(583px / 11); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: green;
  font-size: 20px;
  width: 25%;
  & .slick-slider {
    width: 100%;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const topTitle = styled.span`
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
  height: 150px;
  width: 100%;
  margin: 0 auto;
`;

export const planet = styled.div`
  display: flex;
`;
