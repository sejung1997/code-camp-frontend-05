import * as Landing from "./Landing.styles";
import { v4 as uuidv4 } from "uuid";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import Head from "next/head";
import { useEffect } from "react";
import SvgMap from "../maps/Maps.container";
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
        <Landing.Section isMap={false}>
          <Landing.Text>
            당신 근처에
            <br />
            그린마켓
            <Landing.SubText>
              전국의 신선한 농수산물을 도매 가격으로
              <br /> 전국 710여개의 판매자와 함께하고 있습니다
            </Landing.SubText>
          </Landing.Text>
          <Landing.Contents>
            <img className="map" src="/images/korea_map.png" />
            <Landing.product
              className="fade grain"
              src="/images/Organic1.png"
            />
            <Landing.product className="fade fish" src="/images/Organic2.png" />
            <Landing.product
              className="fade flout"
              src="/images/Organic3.png"
            />
            <Landing.product className="fade meat" src="/images/Organic4.png" />
            <Landing.product className="fade veg" src="/images/Organic5.png" />
          </Landing.Contents>
        </Landing.Section>
      </Landing.Promotion>
      <Landing.Product>
        <Landing.ProductSection>
          <h3>금주의 추천 상품</h3>
          <Landing.SlideSection>
            <Slider className="slick-slider" {...props.settings}>
              {props.data?.fetchUseditems?.map((el, index) => (
                <Landing.Column key={el._id} onClick={props.movePage(el._id)}>
                  <Landing.SliderItem
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></Landing.SliderItem>
                  <Landing.Title>
                    [{el.seller.name}] {el.name}
                  </Landing.Title>
                  <Landing.Title>{el.price}원</Landing.Title>
                </Landing.Column>
              ))}
            </Slider>
          </Landing.SlideSection>
        </Landing.ProductSection>
      </Landing.Product>

      <Landing.Promotion>
        <Landing.Section isMap={true}>
          <Landing.Text>
            건강한 반찬을
            <br /> 당신의 식탁으로
            <Landing.SubText>
              {" "}
              우리 동네에서 찾는 반찬가게
              <br />
              지역 설정 후에 신선한 농수산물과 반찬거리를 쇼핑해보세요
            </Landing.SubText>
          </Landing.Text>
          <Landing.Map>
            <Landing.doName>
              {props.inputs.doName} {props.inputs.cityName}
            </Landing.doName>
            <SvgMap inputs={props.inputs} setInputs={props.setInputs} />
          </Landing.Map>
        </Landing.Section>
      </Landing.Promotion>
      <Landing.Product>
        <Landing.ProductSection>
          <h3>베스트 상품</h3>
          <Landing.SlideSection>
            <Slider className="slick-slider" {...props.settings}>
              {props.BestData?.fetchUseditemsOfTheBest?.map((el) => (
                <Landing.Column key={el._id} onClick={props.movePage(el._id)}>
                  <Landing.SliderItem
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></Landing.SliderItem>
                  <Landing.Title>
                    [{el.seller.name}] {el.name}
                  </Landing.Title>
                  <Landing.Title>{el.price}원</Landing.Title>
                </Landing.Column>
              ))}
            </Slider>
          </Landing.SlideSection>
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
