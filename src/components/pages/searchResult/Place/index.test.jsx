import { render } from '@testing-library/react';
import Place from '.';

describe('Place', () => {
  const renderPlace = ({ place }) => render(<Place place={place} />);

  it('장소 정보를 화면에 보여준다.', () => {
    const place = {
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
    };

    const { getByText } = renderPlace({ place });

    expect(getByText('온정돈까스')).not.toBeNull();
    expect(getByText('서울 관악구 신림동 546-1')).not.toBeNull();
  });
});
