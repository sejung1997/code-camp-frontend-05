import { useQuery } from "@apollo/client";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useMovePage } from "../../commons/function/movePage";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../commons/types/generated/types";
import { FETCH_USED_ITEMS_BEST } from "./Landing.gql&types";
import LandingPageUI from "./Landing.presenter";

export default function LandingPage() {
  const movePage = useMovePage();
  const { data: BestData } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_BEST);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <LandingPageUI
      movePage={movePage}
      BestData={BestData}
      settings={settings}
    />
  );
}
