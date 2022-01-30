import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomeContainer from '.';

describe('HomeContainer', () => {
  const renderHomeContainer = () => render(
    <MemoryRouter>
      <HomeContainer />
    </MemoryRouter>,
  );

  it('타이틀을 화면에 보여준다.', () => {
    const title = 'Today Menu Information';
    const { getByText } = renderHomeContainer();

    expect(getByText(title)).not.toBeNull();
  });
});
