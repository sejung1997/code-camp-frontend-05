import { DatePicker, Space } from "antd";
import * as home from "./homePage.styles";
import { IHomePageUI } from "./homePage.types";

export default function BannerPageUI(props: IHomePageUI) {
  return (
    <home.Wrapper>
      <home.todayUniverse>
        <home.title>Today's universe</home.title>
        <home.inputWrapper>
          <Space direction="vertical">
            <DatePicker onChange={props.setDate} />
          </Space>
          <home.searchBtn onClick={props.imgSearch}>검색</home.searchBtn>
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
