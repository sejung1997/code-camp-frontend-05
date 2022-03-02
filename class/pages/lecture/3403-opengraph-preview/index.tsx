import axios from "axios";
import { useEffect } from "react";

export default function OpenGraphPreview() {
  useEffect(() => {
    const getOpenGraph = async () => {
      const result = await axios.get("https://www.gmarket.co.kr/"); // daum.net 등은 corse 차단 당하므로 백엔드에서 요청하는 것이 일반적
      console.log(result.data.split("<meta "));

      console.log(
        result.data
          .split("<meta ")
          .filter((el) => el.includes("og: url"))[0]
          .split(" ")
      );
      const opengraph = result.data
        .split("<meta ")
        .filter((el) => el.includes("og:url"))[0]
        .split(" ");
      console.log(
        opengraph[1].replaceAll("content=", "").replaceAll('"/>', "")
      );
    };
    getOpenGraph();
  }, []);
  return <div></div>;
}
