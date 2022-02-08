import BannerPageUI from "./homePage.presenter";

import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { number } from "../signIn/signIn.styles";

export default function BannerPage() {
  const [todayData, setTodayData] = useState("");
  const [dateString, setDateString] = useState("");

  const setDate = (_, dataString) => {
    console.log(typeof dataString);
    console.log(dataString.slice(5, 7));
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

  return (
    <BannerPageUI
      todayData={todayData}
      setDate={setDate}
      imgSearch={imgSearch}
    />
  );
}
