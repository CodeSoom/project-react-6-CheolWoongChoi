import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

describe('Header', () => {
  const renderHeader = () => render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  it('TMI 로고가 화면에 나타난다.', () => {
    const { getByText } = renderHeader();

    expect(getByText('TMI')).not.toBeNull();
  });
});
