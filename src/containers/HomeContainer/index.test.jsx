import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import HomeContainer from '.';

useSelector.mockImplementation((selector) => selector({
  latLng: {},
}));

describe('HomeContainer', () => {
  const renderHomeContainer = () => render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>,
  );

  it('타이틀을 화면에 보여준다.', () => {
    const title = '먹고 싶은 메뉴를 골라보세요!';
    const { container } = renderHomeContainer();

    expect(container).toHaveTextContent(title);
  });
});
