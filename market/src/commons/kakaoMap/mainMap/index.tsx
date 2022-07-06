import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

declare const window: typeof globalThis & {
  kakao: any;
};
export function SearchMap(props) {
  const viewMap = () => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=4e89be21e672c2ea6ecbba62c71fa54a&autoload=false&libraries=services";
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(() => {
        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });
        const geocoder = new window.kakao.maps.services.Geocoder();
        // 정상적으로 검색이 완료됐으면
        let newLatLng;
        geocoder.addressSearch(
          props.inputs.doName + props.inputs.cityName,
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              newLatLng = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              searchMarket();
            }
          }
        );
        const searchMarket = () => {
          const mapOption = {
            center: newLatLng, // 지도의 중심좌표
            level: 9, // 지도의 확대 레벨
          };
          const categoryList = ["MT1", "CS2", "FD6", "CE7"];
          const mapContainer = document.getElementById("map"); // 지도를 표시할 div

          // 지도를 생성합니다
          const map = new window.kakao.maps.Map(mapContainer, mapOption);
          // 장소 검색 객체를 생성합니다
          const ps = new window.kakao.maps.services.Places(map);

          // 카테고리로 은행을 검색합니다
          ps.categorySearch(
            categoryList[props.inputs.categoryIndex],
            placesSearchCB,
            { useMapBounds: true }
          );
          // 키워드 검색 완료 시 호출되는 콜백함수 입니다
          function placesSearchCB(data, status, pagination) {
            if (status === window.kakao.maps.services.Status.OK) {
              for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
              }
            }
          }

          // 지도에 마커를 표시하는 함수입니다
          function displayMarker(place) {
            // 마커를 생성하고 지도에 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: new window.kakao.maps.LatLng(place.y, place.x),
            });

            // 마커에 클릭이벤트를 등록합니다
            window.kakao.maps.event.addListener(marker, "click", function () {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
              infowindow.setContent(
                '<div style="padding:5px;font-size:12px;">' +
                  place.place_name +
                  "</div>"
              );
              infowindow.open(map, marker);
            });
          }
        };
      });
    };
  };

  useEffect(() => {
    viewMap();
    console.log(props.inputs);
  }, [props.inputs.isInputChange]);
  return (
    <div style={{ marginTop: " 00px" }}>
      <div id="map" style={{ width: "700px", height: "500px" }}></div>
    </div>
  );
}
