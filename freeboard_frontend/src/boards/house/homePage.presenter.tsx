import { DatePicker, Space } from "antd";
import * as home from "./homePage.styles";
import { IHomePageUI } from "./homePage.types";
import { v4 as uuidv4 } from "uuid";

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
        <home.searchWrapper>
          <home.inputWrapper>
            <input
              style={{ color: "black", outline: "none" }}
              onChange={(event) => props.setKeyword(event.target.value)}
            />
            <home.searchBtn onClick={props.searchApi}>검색</home.searchBtn>
          </home.inputWrapper>

          {props.searchData?.map((el) => (
            <home.searchGroup key={uuidv4()}>
              <div>{el.data[0].title}</div>
              <home.imgGroup
                src={`http://images-assets.nasa.gov/image/${el.data[0].nasa_id}/${el.data[0].nasa_id}~orig.jpg`}
              />
            </home.searchGroup>
          ))}
        </home.searchWrapper>
      </home.todayUniverse>
    </home.Wrapper>
  );
}
