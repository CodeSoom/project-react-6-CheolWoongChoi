import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomePage from '.';

useSelector.mockImplementation((selector) => selector({
  latLng: {},
}));

describe('HomePage', () => {
  const renderHomePage = () => render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );

  it('타이틀을 화면에 보여준다.', () => {
    const title = '먹고 싶은 메뉴를 골라보세요!';
    const { container } = renderHomePage();

    expect(container).toHaveTextContent(title);
  });
});
