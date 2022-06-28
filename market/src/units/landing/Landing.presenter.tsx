import * as Landing from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
// import Slider from "react-slick";
import ReactPlayer from "react-player";

export default function LandingPageUI(props) {
  return (
    <>
      <Landing.Market>
        <Landing.Inner>
          <Landing.Text>
            당신 근처의 그린마켓
            <div>건강한 반찬을 당신의 식탁으로</div>
          </Landing.Text>
          <Landing.Contents></Landing.Contents>
        </Landing.Inner>
      </Landing.Market>
      <Landing.Market>
        <Landing.Inner>
          <Landing.Text>
            내 동네에서 찾는 반찬가게
            <div>우리 동네 선택하기</div>
          </Landing.Text>
          <Landing.Contents></Landing.Contents>
        </Landing.Inner>
      </Landing.Market>
      {/* <Landing.List>
        <Landing.topTitle>인기 상품</Landing.topTitle>
        <Landing.Row>
          {props.BestData?.fetchUseditemsOfTheBest.map((el) => (
            <Landing.Column key={el._id} onClick={props.movePage(el._id)}>
              <Landing.Title>{el.name}</Landing.Title>

              <Landing.Title>{el.seller.name}</Landing.Title>
              <Slider {...props.settings}>
                {el.images
                  .filter((x) => x)
                  .map((y) => (
                    <Landing.SliderItem
                      key={uuidv4()}
                      src={`https://storage.googleapis.com/${y}`}
                    ></Landing.SliderItem>
                  ))}
              </Slider>
              <Landing.Title>{el.createdAt.slice(0, 10)}</Landing.Title>
            </Landing.Column>
          ))}
        </Landing.Row>
      </Landing.List> */}
      <Landing.play>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lazygdZxyAU#t=1m"
          width={900}
          height={506}
          playing={true}
          muted={true}
        />
      </Landing.play>
    </>
  );
}
