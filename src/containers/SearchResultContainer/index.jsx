import { useEffect, useState } from 'react';

import KakaoMap from '@/components/common/KaKaoMap';
import { isEmptyObj } from '@/utils/common';

export default function SearchResultContainer({ keyword }) {
  const [latLng, setLatLng] = useState({});

  const getLatLng = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  };

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLatLng({
      latitude,
      longitude,
    });
  };

  const handleError = () => {
    window.alert('위치를 허용해주세요');
  };

  useEffect(() => {
    getLatLng();
  }, []);

  if (!keyword || isEmptyObj(latLng)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <KakaoMap latLng={latLng} keyword={keyword} />
    </div>
  );
}
