import { useEffect, useRef } from 'react';

export default function KakaoMap({ latLng, keyword }) {
  const infoWindowRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    createKakaoMap(latLng);
    searchPlaceByKeyword(keyword);
  }, []);

  const createKakaoMap = ({ latitude, longitude }) => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);
    infoWindowRef.current = new kakao.maps.InfoWindow({ zIndex: 1 });
  };

  const searchPlaceByKeyword = (keyword) => {
    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(keyword, placesSearchCB);
  };

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  const placesSearchCB = (data, status, pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds();

      for (let i = 0; i < data.length; i += 1) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      mapRef.current.setBounds(bounds);
    }
  };

  // 지도에 마커를 표시하는 함수입니다
  const displayMarker = (place) => {
    // 마커를 생성하고 지도에 표시합니다
    const marker = new kakao.maps.Marker({
      map: mapRef.current,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', () => {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infoWindowRef.current.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}</div>`);
      infoWindowRef.current.open(mapRef.current, marker);
    });
  };

  return (
    <div id="map" style={{ height: '500px' }} />
  );
}
