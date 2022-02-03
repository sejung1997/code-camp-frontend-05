import Slider from "react-slick";
import * as he from "./homePage.styles";
interface IBannerPageUI {
  settings: any;
}

export default function BannerPageUI(props: IBannerPageUI) {
  return (
    <he.Wrapper>
      <Slider {...props.settings}>
        <he.planet>
          <he.SliderItem src="/images/planet11.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet22.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet3.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet4.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet5.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet6.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet7.png"></he.SliderItem>
        </he.planet>
        <he.planet>
          <he.SliderItem src="/images/planet8.png"></he.SliderItem>
        </he.planet>
      </Slider>
    </he.Wrapper>
  );
}
