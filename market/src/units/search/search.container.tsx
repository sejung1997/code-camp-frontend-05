import { SearchMap } from "../../commons/kakaoMap/mainMap";
import SvgMap from "../maps/Maps.container";
import { useRef, useState } from "react";
import * as Map from "./search.styles";
import Button01 from "../../commons/button01";
import { createStore } from "redux";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { UpSquareOutlined } from "@ant-design/icons";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      address: "",
      categoryIndex: 0,
    };
  }
  const newState = { ...currentState };
  if (action.type === "search") {
    (newState.address = action.inputs.address),
      (newState.categoryIndex = action.categoryIndex);
  }

  return newState;
}
const store = createStore(reducer);
export default function SearchPage() {
  const mapRef = useRef(null);
  const searchRef = useRef(null);
  const [inputs, setInputs] = useState({
    doName: "",
    cityName: "",
    categoryIndex: 0,
    isInputChange: 0,
  });
  const changeCategory = (e) => {
    setInputs({ ...inputs, categoryIndex: e.target.value });
  };
  const onClickSearch = () => {
    // dispatch({
    //   type: "search",
    //   inputs: {
    //     address: inputs.doName + inputs.cityName,
    //     categoryIndex: inputs.categoryIndex,
    //   },
    // });
    setInputs({ ...inputs, isInputChange: inputs.isInputChange + 1 });
    if (mapRef !== undefined) {
      mapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const scrollTop = () => {
    if (mapRef !== undefined) {
      searchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Provider store={store}>
      <Map.Main ref={searchRef}>
        <Map.Select>
          <SvgMap inputs={inputs} setInputs={setInputs} />
          <Map.Text>
            <h4>지역과 카테고리를 선택해주세요</h4>
            <div>
              지역:
              <span> {inputs.doName}</span>
              <span>{inputs.cityName}</span>
              <br />
              카테고리:
              <select onChange={changeCategory}>
                <option value="0">대형마트</option>
                <option value="1">편의점</option>
                <option value="2"> 음식점</option>
                <option value="3">카페</option>
              </select>
              <Button01 click={onClickSearch} name="검색" />
            </div>
          </Map.Text>
        </Map.Select>
      </Map.Main>
      <Map.section>
        <Map.Result ref={mapRef}>
          {inputs.isInputChange > 0 && (
            <>
              <SearchMap inputs={inputs} />
              <Map.ScrollTop onClick={scrollTop}>
                <UpSquareOutlined />
              </Map.ScrollTop>
            </>
          )}
        </Map.Result>
      </Map.section>
    </Provider>
  );
}
