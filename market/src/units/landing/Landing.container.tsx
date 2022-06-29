import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMovePage } from "../../commons/function/movePage";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../commons/types/generated/types";
import { FETCH_USED_ITEMS_BEST } from "./Landing.gql&types";
import { FETCH_USED_ITEMS } from "../List/gql&types";
import LandingPageUI from "./Landing.presenter";
import { gsap } from "gsap/dist/gsap";

export default function LandingPage() {
  const movePage = useMovePage();
  const { data: BestData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_BEST);

  const { data: data } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  useEffect(() => {
    const fadeInEls = document.querySelectorAll(".fade");
    console.log(fadeInEls);
    fadeInEls.forEach(function (fadeInEl, index) {
      gsap.to(fadeInEl, 1, {
        opacity: 1,
        delay: index * 0.5,
      });
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: true,
    cssEase: "linear",
    fade: true,
  };
  return (
    <LandingPageUI
      movePage={movePage}
      BestData={BestData}
      settings={settings}
      data={data}
    />
  );
}
