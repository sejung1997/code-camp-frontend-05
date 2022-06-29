import * as Landing from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import Head from "next/head";

export default function LandingPageUI(props) {
  return (
    <>
      <Head>
        <script
          defer
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"
          integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>
      <Landing.Promotion>
        <Landing.Section>
          <Landing.Text>
            나만의 그린마켓을 찾아보세요
            <Landing.SubText>
              전국의 신선한 농수산물을 도매 가격으로
              <br /> 전국 710여개의 판매자와 함께하고 있습니다
            </Landing.SubText>
          </Landing.Text>
          <Landing.Contents>
            <img
              className="map"
              src="https://storage.googleapis.com/market_project/images/korea_map.png"
            />
            <Landing.product
              className="fade grain"
              src="/images/Organic1.png"
            />
            <Landing.product
              className="fade fish"
              src="https://storage.googleapis.com/market_project/images/Organic2.png"
            />
            <Landing.product
              className="fade flout"
              src="/images/Organic3.png"
            />
            <Landing.product
              className="fade meat"
              src="https://storage.googleapis.com/market_project/images/Organic4.png"
            />
            <Landing.product
              className="fade veg"
              src="https://storage.googleapis.com/market_project/images/Organic5.png"
            />
          </Landing.Contents>
        </Landing.Section>
      </Landing.Promotion>
      <Landing.Product>
        <Landing.ProductSection>
          <h3>MD's Pick</h3>
          <Landing.SlideSection>
            <Slider {...props.settings}>
              {props.data?.fetchUsedItems?.map((el) => (
                <Landing.Column key={el._id} onClick={props.movePage(el._id)}>
                  <Landing.Title>{el.name}</Landing.Title>
                  <Landing.SliderItem
                    src={`https://storage.googleapis.com/${el._id}`}
                  ></Landing.SliderItem>
                  <Landing.Title>{el.price}</Landing.Title>
                  <Landing.Title>{el.seller.name}</Landing.Title>
                </Landing.Column>
              ))}
            </Slider>
          </Landing.SlideSection>
        </Landing.ProductSection>
      </Landing.Product>
      <Landing.Promotion>
        <Landing.Section>
          <Landing.Text>
            내 동네에서 찾는 반찬가게
            <div>건강한 반찬을 당신의 식탁으로</div>
          </Landing.Text>
          <Landing.Contents></Landing.Contents>
        </Landing.Section>
      </Landing.Promotion>
      <Landing.Product>
        <Landing.ProductSection>
          <Landing.topTitle>인기 상품</Landing.topTitle>
          <Landing.Row>
            {props.BestData?.fetchUseditemsOfTheBest.map((el) => (
              <Landing.Column key={el._id} onClick={props.movePage(el._id)}>
                <Landing.Title>{el.name}</Landing.Title>
                <Landing.SliderItem
                  src={`https://storage.googleapis.com/${el._id}`}
                ></Landing.SliderItem>
                <Landing.Title>{el.price}</Landing.Title>
                <Landing.Title>{el.seller.name}</Landing.Title>
              </Landing.Column>
            ))}
          </Landing.Row>
        </Landing.ProductSection>
      </Landing.Product>

      {/* <Landing.play>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=lazygdZxyAU#t=1m"
          width={900}
          height={506}
          playing={true}
          muted={true}
        />
      </Landing.play> */}
    </>
  );
}
