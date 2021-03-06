import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerPageUI from "./banner.presenter";

export default function BannerPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };
  return <BannerPageUI settings={settings} />;
}
