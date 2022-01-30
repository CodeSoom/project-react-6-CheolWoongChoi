import { render } from '@testing-library/react';

import RecommendMenu from '.';

describe('RecommendMenu', () => {
  const renderRecommendMenu = () => render(<RecommendMenu />);

  it('서브 타이틀이 화면에 나타난다.', () => {
    const subTitle = '오늘의 추천';
    const { getByText } = renderRecommendMenu();

    expect(getByText(subTitle)).not.toBeNull();
  });

  it('추천 메뉴가 화면에 나타난다.', () => {
    const menus = ['한식', '일식', '중식', '양식', '분식', '빵', '간식'];

    const { getByText } = renderRecommendMenu();

    menus.forEach((menu) => {
      expect(getByText(menu)).not.toBeNull();
    });
  });
});
