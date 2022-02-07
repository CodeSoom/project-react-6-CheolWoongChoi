import { render, fireEvent } from '@testing-library/react';

import SearchMenu from '.';

describe('SearchMenu', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const renderSearchMenu = () => render(
    <SearchMenu onChange={handleChange} onClick={handleClick} />,
  );

  it('서브 타이틀이 화면에 나타난다.', () => {
    const subTitle = '생각나는 메뉴를 알려주세요!';
    const { getByText } = renderSearchMenu();

    expect(getByText(subTitle)).not.toBeNull();
  });

  it('onChange 이벤트 핸들러가 실행된다.', () => {
    const placeholderText = '메뉴를 입력하세요';
    const { getByPlaceholderText } = renderSearchMenu();

    fireEvent.change(getByPlaceholderText(placeholderText), { target: { value: '한식' } });

    expect(handleChange).toBeCalled();
  });

  it('onClick 이벤트 핸들러가 실행된다.', () => {
    const { getByText } = renderSearchMenu();

    fireEvent.click(getByText('검색'));

    expect(handleClick).toBeCalled();
  });
});
