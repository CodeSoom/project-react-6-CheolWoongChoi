import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import SearchResultContainer from '.';

useSelector.mockImplementation((selector) => selector({
  latLng: {},
}));

describe('SearchResultContainer', () => {
  const renderSearchResultContainer = ({
    keyword,
  }) => render(<SearchResultContainer keyword={keyword} />);

  it('키워드가 없으면, 화면에 로딩이 나타난다.', () => {
    const { getByText } = renderSearchResultContainer({
      keyword: undefined,
    });

    expect(getByText('Loading...')).not.toBeNull();
  });
});
