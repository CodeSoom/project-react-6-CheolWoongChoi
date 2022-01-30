import { render } from '@testing-library/react';

import HomePage from '.';

describe('HomePage', () => {
  const title = 'Today Menu Information';

  it('타이틀을 화면에 보여준다.', () => {
    const { getByText } = render(<HomePage />);

    expect(getByText(title)).not.toBeNull();
  });
});
