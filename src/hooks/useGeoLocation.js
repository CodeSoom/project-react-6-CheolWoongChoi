import { useSelector, useDispatch } from 'react-redux';

import { setLatLng } from '@/slices';

export default function useGeoLocation() {
  const dispatch = useDispatch();
  const { latLng } = useSelector((state) => state);

  const isNoLatLng = (latLng) => {
    const { latitude, longitude } = latLng;

    if (latitude === 0 || longitude === 0) {
      return true;
    }

    return false;
  };

  const getLatLng = () => {
    console.log('/// getLatLng ///');
    console.log(latLng);

    if (isNoLatLng(latLng)) {
      navigator.geolocation.getCurrentPosition(handleGetLatLngSuccess, handleGetLatLngError);
    }
  };

  const handleGetLatLngSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    dispatch(setLatLng({
      latitude,
      longitude,
    }));
  };

  const handleGetLatLngError = () => {
    window.alert('위치를 허용해주세요');
  };

  return {
    isNoLatLng,
    getLatLng,
  };
}
