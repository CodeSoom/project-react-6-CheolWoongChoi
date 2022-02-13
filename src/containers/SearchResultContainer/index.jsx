import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import KakaoMap from '@/components/common/KakaoMap';
import Places from '@/components/pages/searchResult/Places';
import { useGeoLocation } from '@/hooks';

export default function SearchResultContainer({ keyword }) {
  const { latLng, places } = useSelector((state) => state);
  const { getLatLng, isNoLatLng } = useGeoLocation();

  useEffect(() => {
    getLatLng();
  }, []);

  if (!keyword || isNoLatLng(latLng)) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <div>
      <KakaoMap latLng={latLng} keyword={keyword} />
      <Places places={places} />
    </div>
  );
}
