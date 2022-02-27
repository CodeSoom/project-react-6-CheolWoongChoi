import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setPlaces } from '@/slices';

export default function logics({ latLng, keyword }) {
  const dispatch = useDispatch();
  const infoWindowRef = useRef(null);
  const mapRef = useRef(null);

  const createKakaoMap = ({ latitude, longitude }) => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 5,
    };

    mapRef.current = new kakao.maps.Map(mapContainer, mapOption);
    infoWindowRef.current = new kakao.maps.InfoWindow({ zIndex: 1 });
  };

  const searchPlaceByKeyword = ({ keyword }) => {
    const ps = new kakao.maps.services.Places(mapRef.current);

    ps.keywordSearch(keyword, placesSearchCB, {
      useMapCenter: true,
    });
  };

  const searchPlaceByCategory = ({ latLng }) => {
    const ps = new kakao.maps.services.Places(mapRef.current);

    ps.categorySearch('FD6', placesSearchCB, { useMapBounds: true });
  };

  const placesSearchCB = (data, status, pagination) => {
    console.log(data);
    console.log(status);
    console.log(pagination);

    if (status === kakao.maps.services.Status.OK) {
      handleSetPlaces(data);

      for (let i = 0; i < data.length; i += 1) {
        displayMarker(data[i]);
      }
    }
  };

  const handleSetPlaces = (places) => {
    dispatch(setPlaces(places));
  };

  const displayMarker = (place) => {
    const marker = new kakao.maps.Marker({
      map: mapRef.current,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, 'click', () => {
      infoWindowRef.current.setContent(`<div style="padding:5px; font-size:12px;">${place.place_name}</div>`);
      infoWindowRef.current.open(mapRef.current, marker);
    });
  };

  useEffect(() => {
    createKakaoMap(latLng);
    searchPlaceByKeyword({ keyword });
    // searchPlaceByCategory({ latLng });
  }, [keyword]);

  return {

  };
}
