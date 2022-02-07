import { render, fireEvent } from '@testing-library/react';

import RecommendMenu from '.';

describe('RecommendMenu', () => {
  const handleClick = jest.fn();
  const renderRecommendMenu = () => render(<RecommendMenu onClick={handleClick} />);

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

  it('추천 메뉴를 클릭하면, onClick 이벤트 핸들러가 실행된다.', () => {
    const menus = ['한식', '일식', '중식', '양식', '분식', '빵', '간식'];
    const { getByText } = renderRecommendMenu();

    menus.forEach((menu) => {
      fireEvent.click(getByText(menu));
    });

    expect(handleClick).toBeCalledTimes(7);
  });
});
