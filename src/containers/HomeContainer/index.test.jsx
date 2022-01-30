import { render } from '@testing-library/react';

import HomeContainer from '.';

describe('HomeContainer', () => {
  const title = 'Today Menu Information';

  it('타이틀을 화면에 보여준다.', () => {
    const { getByText } = render(<HomeContainer />);

    expect(getByText(title)).not.toBeNull();
  });
});
