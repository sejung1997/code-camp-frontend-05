import Slider from "react-slick";
import * as banner from "./banner.styles";
interface IBannerPageUI {
  settings: any;
}

export default function BannerPageUI(props: IBannerPageUI) {
  return (
    <banner.Wrapper>
      <Slider {...props.settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <banner.planet key={x}>
            <banner.SliderItem
              src={`images/planet${x}.png`}
            ></banner.SliderItem>
          </banner.planet>
        ))}
      </Slider>
    </banner.Wrapper>
  );
}
