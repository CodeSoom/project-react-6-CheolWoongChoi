import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  const handleClick = jest.fn();

  const renderButton = ({ text }) => render(
    <Button onClick={handleClick}>
      {text}
    </Button>,
  );

  it('버튼에 텍스트를 전달하면, 텍스트를 가진 버튼이 화면에 나타난다.', () => {
    const text = '버튼!';
    const { getByText } = renderButton({ text });

    expect(getByText(text)).toHaveTextContent(text);
  });

  it('버튼을 클릭하면, onClick 핸들러가 실행된다.', () => {
    const text = '버튼2!';
    const { getByText } = renderButton({ text });

    fireEvent.click(getByText(text));

    expect(handleClick).toBeCalled();
  });
});
