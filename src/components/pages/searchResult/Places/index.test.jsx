import { render } from '@testing-library/react';

import Places from '.';

describe('Places', () => {
  const renderPlaces = ({ places }) => render(<Places places={places} />);

  context('장소 정보가 없으면', () => {
    it('장소 정보가 없다는 메시지가 나타난다.', () => {
      const { getByText } = renderPlaces({ places: [] });

      expect(getByText('검색 결과가 없습니다... 😥')).not.toBeNull();
    });
  });

  context('장소 정보가 있으면', () => {
    const places = [{
      address_name: '서울 관악구 신림동 546-1',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 일식 > 돈까스,우동',
      distance: '871',
      id: '27508076',
      phone: '02-3281-3330',
      place_name: '온정돈까스',
      place_url: 'http://place.map.kakao.com/27508076',
      road_address_name: '서울 관악구 조원로 60',
      x: '126.909109463358',
      y: '37.4835475729473',
    }];

    it('장소 정보를 화면에 보여준다.', () => {
      const { getByText } = renderPlaces({ places });

      expect(getByText('온정돈까스')).not.toBeNull();
    });
  });
});
