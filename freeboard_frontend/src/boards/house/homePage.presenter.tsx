import Slider from "react-slick";
import { DatePicker, Space } from "antd";
import * as home from "./homePage.styles";
import { IHomePageUI } from "./homePage.types";

export default function BannerPageUI(props: IHomePageUI) {
  return (
    <home.Wrapper>
      <Slider {...props.settings}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
          <home.planet key={x}>
            <home.SliderItem src={`images/planet${x}.png`}></home.SliderItem>
          </home.planet>
        ))}
      </Slider>

      <home.todayUniverse>
        <home.title>Today's universe</home.title>
        <home.inputWrapper>
          <Space direction="vertical">
            <DatePicker onChange={props.setDate} />
          </Space>
        </home.inputWrapper>
        <home.todayDate>{props.todayData?.date}</home.todayDate>
        <home.todayTitle>{props.todayData?.title}</home.todayTitle>
        <home.data>
          <home.todayImg src={props.todayData?.url} />

          <home.todayExplan>{props.todayData?.explanation}</home.todayExplan>
        </home.data>
      </home.todayUniverse>
    </home.Wrapper>
  );
}
