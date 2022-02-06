import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerPageUI from "./homePage.presenter";

import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export default function BannerPage() {
  const [todayData, setTodayData] = useState("");

  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
  };
  useEffect(() => {}, []);

  const setDate = (_, dataString) => {
    console.log(dataString);
    console.log(Number(dataString.slice(0, 4)));
    // if (Number(dataString.slice(0, 4)) < 1996)
    //   return message.info("1996년 6월 이후부터 가능합니다");
    // console.log(Number(dataString.slice(6, 2)));
    try {
      const fetchPlanet = async () => {
        const result = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=ybXmAgw7FxGZA8zMryAhdMLoKBGO2eFhaxrsjTAv&date=${dataString}`
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
      settings={settings}
      todayData={todayData}
      todayDate={todayDate}
      setDate={setDate}
    />
  );
}
