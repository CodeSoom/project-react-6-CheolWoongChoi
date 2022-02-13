import useLogics from './logics';

export default function KakaoMap({ latLng, keyword }) {
  useLogics({ latLng, keyword });

  return (
    <div id="map" style={{ height: '500px' }} />
  );
}
