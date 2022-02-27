import { render } from '@testing-library/react';

import KakaoMap from '.';

describe('KakaoMap', () => {
  const data = {
    latLng: {
      lat: 37,
      lng: 21,
    },
    searchKeyword: '',
  };
  const renderKakaoMap = () => render(<KakaoMap />);

  // TODO
  // 좌표정보의 유무에 따라 맵이 렌더링된다.
  // 검색키워드가 있으면 카카오맵에 마커가 표시된다.
  it('???', () => {
  });
});
