import { render, fireEvent } from '@testing-library/react';
import menus from '@/fixtures/menus';

import RecommendMenu from '.';

describe('RecommendMenu', () => {
  const handleClick = jest.fn();
  const renderRecommendMenu = () => render(<RecommendMenu onClick={handleClick} />);

  it('추천 메뉴는 화면에 16개 나타난다.', () => {
    const { queryByText } = renderRecommendMenu();
    let count = 0;

    menus.forEach((menu) => {
      if (queryByText(menu)) {
        count += 1;
      }
    });

    expect(count).toBe(16);
  });

  it('추천 메뉴를 클릭하면, onClick 이벤트 핸들러가 실행된다.', () => {
    const { queryByText } = renderRecommendMenu();

    menus.forEach((menu) => {
      if (queryByText(menu)) {
        fireEvent.click(queryByText(menu));
      }
    });

    expect(handleClick).toBeCalledTimes(16);
  });
});
