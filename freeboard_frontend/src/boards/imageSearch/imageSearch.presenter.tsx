import * as api from "./imageSearch.styles";
export default function ImageSearchPageUI(props) {
  return (
    <api.Main>
      <api.Search>
        <api.title>경도:</api.title>
        <api.lon id="lon" placeholder="0 - 180" onChange={props.setLocation} />
        <api.title>위도 :</api.title>

        <api.lon id="lat" placeholder=" 0 - 90" onChange={props.setLocation} />
        <api.title>배율:</api.title>

        <api.lon id="dim" placeholder="0 - 1" onChange={props.setLocation} />
        <api.searchBtn onClick={props.searchImg}>검색</api.searchBtn>
      </api.Search>
      <api.Img src={props.data?.url} />
    </api.Main>
  );
}
