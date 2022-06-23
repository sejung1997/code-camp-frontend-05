import BannerPageUI from "./homePage.presenter";

import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { number } from "../signIn/signIn.styles";

export default function BannerPage() {
  const month = "0" + String(new Date().getMonth() + 1);
  const day = String(new Date().getDate());
  const [todayData, setTodayData] = useState("");
  const [dateString, setDateString] = useState(`2022-${month}-${day}`);
  const [keyword, setKeyword] = useState("");
  const [searchData, setSearchData] = useState();
  const [searchImg, setSearchImg] = useState();

  const setDate = (_, dataString) => {
    console.log(typeof dataString);
    console.log(dataString);
    // if (Number(dataString.slice(0, 4)) < 1996)
    //   return message.info("1996년 6월 이후부터 가능합니다");
    // console.log(Number(dataString.slice(6, 2)));
    setDateString(dataString);
  };

  const imgSearch = () => {
    try {
      const fetchPlanet = async () => {
        const result = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=ybXmAgw7FxGZA8zMryAhdMLoKBGO2eFhaxrsjTAv&date=${Number(
            dateString.slice(0, 4)
          )}-${Number(dateString.slice(5, 7))}-${Number(
            dateString.slice(8, 10)
          )}`
        );
        setTodayData(result?.data);
      };
      fetchPlanet();
    } catch (error) {
      message.info(error);
    }
  };
  const searchApi = () => {
    try {
      const searchNasa = async () => {
        const result = await axios.get(
          `https://images-api.nasa.gov/search?q=${keyword}%&media_type=image`
        );
        console.log(result);
        // const imgResult = await result.data.collection.items.map((el) =>
        //   axios.get(el.href).then((res) => JSON.parse(res))
        // );
        // const d = () => {
        //   imgResult.then((res) => console.log(res));
        // };
        // d();
        setSearchData(result.data.collection.items);
        const imgHrefs = result.data.collection.items.map((el) =>
          axios.get(el.href).then((res) => res.data)
        );

        console.log(imgHrefs);
      };
      searchNasa();
    } catch (error) {
      message.info(error);
    }
  };
  useEffect(() => {
    console.log(dateString);
    imgSearch();
  // }, []);

  return (
    <BannerPageUI
      todayData={todayData}
      setDate={setDate}
      searchImg={searchImg}
      imgSearch={imgSearch}
      searchApi={searchApi}
      searchData={searchData}
      setKeyword={setKeyword}
    />
  );
}
