import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMap() {
  useEffect(() => {
    window.kakao?.maps.load(function () {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );

      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 지도에 클릭 이벤트를 등록합니다
      // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
      window.kakao.maps.event.addListener(
        map,
        "click",
        function (mouseEvent: any) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;

          // 마커 위치를 클릭한 위치로 옮깁니다
          marker.setPosition(latlng);
        }
      );
    });
  }, []);
  return (
    <>
      {/* <Head>
        <script></script>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4e89be21e672c2ea6ecbba62c71fa54a"
        ></script>
      </Head> */}
      <div>
        <div id="map" style={{ width: 500, height: 400 }}></div>
      </div>
    </>
  );
}
