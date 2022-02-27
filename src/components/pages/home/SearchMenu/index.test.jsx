import { render, fireEvent } from '@testing-library/react';

import SearchMenu from '.';

describe('SearchMenu', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderSearchMenu = () => render(
    <SearchMenu onChange={handleChange} onClick={handleClick} />,
  );

  it('onChange 이벤트 핸들러가 실행된다.', () => {
    const placeholderText = '메뉴를 입력하세요';
    const { getByPlaceholderText } = renderSearchMenu();

    fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: '한식' } });

    expect(handleChange).toBeCalled();
  });

  it('onClick 이벤트 핸들러가 실행된다.', () => {
    const { getByRole } = renderSearchMenu();

    fireEvent.click(getByRole('search'));

    expect(handleClick).toBeCalled();
  });
});
