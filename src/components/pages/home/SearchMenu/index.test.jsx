import { render, fireEvent } from '@testing-library/react';

import SearchMenu from '.';

describe('SearchMenu', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const handleEnterKey = jest.fn();

  const renderSearchMenu = () => render(
    <SearchMenu
      onChange={handleChange}
      onClick={handleClick}
      onKeyPress={handleEnterKey}
    />,
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

  it('onKeyPress 이벤트 핸들러가 실행된다.', () => {
    const placeholderText = '메뉴를 입력하세요';
    const { getByPlaceholderText } = renderSearchMenu();

    fireEvent.keyPress(getByPlaceholderText(placeholderText), { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(handleEnterKey).toBeCalled();
  });
});
