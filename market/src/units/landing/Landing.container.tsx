import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
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
  const [inputs, setInputs] = useState({
    doName: "",
    cityName: "",
  });
  const movePage = useMovePage();
  // const { data: BestData } = useQuery<
  //   Pick<IQuery, "fetchUseditemsOfTheBest">,
  //   IQueryFetchUseditemsArgs
  // >(FETCH_USED_ITEMS_BEST);

  // const { data: data } = useQuery<
  //   Pick<IQuery, "fetchUseditems">,
  //   IQueryFetchUseditemsArgs
  // >(FETCH_USED_ITEMS, {
  //   variables: { page: 3 },
  // });
  const data = {
    fetchUseditems: [
      {
        _id: "62bc911f08eeea0029e2eb11",
        name: "아몬드",
        contents: "<p>ㅇ</p>",
        price: 20000,
        images: [
          "codecamp-file-storage/2022/6/29/pngwing.com (15).png",
          "",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "asnic",
        },
        remarks: "",
      },
      {
        _id: "62bc90d808eeea0029e2eb0e",
        name: "오렌지",
        contents: "",
        price: 72000,
        images: [
          "codecamp-file-storage/2022/6/29/오랜지.png",
          "",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "혁이네",
        },
        remarks: "",
      },
      {
        _id: "62bc90b708eeea0029e2eb09",
        name: "감자 20kg",
        contents: "<p>asd</p>",
        price: 50000,
        images: [
          "codecamp-file-storage/2022/6/29/감자.jpg",
          "",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "산수연",
        },
        remarks: "",
      },
      {
        _id: "62bc909708eeea0029e2eb06",
        name: "아보카도",
        contents: "",
        price: 5000,
        images: [
          "codecamp-file-storage/2022/6/29/pngwing.com (14).png",
          "codecamp-file-storage/2022/6/29/pngwing.com (14).png",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "혁이네",
        },
        remarks: "",
      },

      {
        _id: "62bc906508eeea0029e2eb00",
        name: "바나나 1kg",
        contents: "<p>ddfs</p>",
        price: 3000,
        images: [
          "codecamp-file-storage/2022/6/29/바나나.jpeg",
          "",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "혁",
        },
        remarks: "",
      },
      {
        _id: "62bc8f6708eeea0029e2eafd",
        name: "배 사과 10kg",
        contents: "",
        price: 20000,
        images: [
          "codecamp-file-storage/2022/6/29/배 사과.png",
          "",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "sellerFC",
        },
        remarks: "",
      },
    ],
  };
  const BestData = {
    fetchUseditemsOfTheBest: [
      {
        _id: "6225cc35155b2d0029675342",
        name: "돈까스",
        contents: "일식돈까ㅆㅡ\n맛있어요\n바삭바삭해요",
        price: 16200,
        images: [
          "codecamp-file-storage/2022/3/7/e60fd385992d2c73af9ae623c1f079a199d6d39c64000bab5c8b07d39e85891afaab71e8b945275397f561f977244539196878aad19daa40e2767042aade9baf3c04da58768364e1481b2f26b6f0277007824e90a155bb480a5548d1dea669e7.jpeg",
          "codecamp-file-storage/2022/3/7/2447A13E5897CF372A.png",
        ],
        seller: {
          name: "ABC초콜릿",
        },
        remarks: "안 축축한 돈까스",
      },
      {
        _id: "6225ca60155b2d0029675323",
        name: "샤브샤브",
        contents: "소고기 샤브샤브\n맛있어요",
        price: 26000,
        images: [
          "codecamp-file-storage/2022/3/7/137_tmp_87abc18235509a9a8e4b860983d01d193210view.jpg",
          "codecamp-file-storage/2022/3/7/6.jpg",
          "codecamp-file-storage/2022/3/7/575c652e5113bd993970f93033b52a551.jpg",
        ],
        seller: {
          name: "pot",
        },
        remarks: "소고기 샤브샤브",
      },
      {
        _id: "6225c9fd155b2d002967531e",
        name: "철판치즈닭갈비",
        contents: "철판치즈닭갈비..\n맛있겠다",
        price: 16000,
        images: [
          "codecamp-file-storage/2022/3/7/33398b219faa7448ed4130b8b70e18c01.jpg",
        ],
        seller: {
          name: "ABC초콜릿",
        },
        remarks: "냠냠",
      },
      {
        _id: "6225b3b3155b2d0029675221",
        name: "감자빵2",
        contents: "<p>!!</p>",
        price: 150000,
        images: ["codecamp-file-storage/2022/3/7/04.jpeg", "", ""],
        seller: {
          name: "pot",
        },
        remarks: "맛나요!",
      },
      {
        _id: "62bc909708eeea0029e2eb04",
        name: "아보카도",
        contents: "",
        price: 5000,
        images: [
          "codecamp-file-storage/2022/6/29/pngwing.com (14).png",
          "codecamp-file-storage/2022/6/29/pngwing.com (14).png",
          "",
          "",
          "",
          "",
        ],
        seller: {
          name: "GS",
        },
        remarks: "",
      },
    ],
  };
  useEffect(() => {
    const fadeInEls = document.querySelectorAll(".fade");
    console.log(fadeInEls);
    fadeInEls.forEach(function (fadeInEl, index) {
      gsap.to(fadeInEl, 0.5, {
        opacity: 1,
        delay: 0.5 + index * 0.5,
      });
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: true,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#fff",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#fff" }}
        onClick={onClick}
      />
    );
  }
  return (
    <LandingPageUI
      movePage={movePage}
      BestData={BestData}
      settings={settings}
      data={data}
      inputs={inputs}
      setInputs={setInputs}
    />
  );
}
