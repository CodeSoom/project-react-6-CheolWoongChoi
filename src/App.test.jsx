import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('App 텍스트를 보여준다.', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('App');
  });
});
