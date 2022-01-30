import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import HomePage from '.';

describe('HomePage', () => {
  const renderHomePage = () => render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );

  it('타이틀을 화면에 보여준다.', () => {
    const title = 'Today Menu Information';
    const { getByText } = renderHomePage();

    expect(getByText(title)).not.toBeNull();
  });
});
