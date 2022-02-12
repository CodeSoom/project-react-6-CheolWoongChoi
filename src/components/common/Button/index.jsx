import { ButtonBox } from './styles';

export default function Button({ children, onClick }) {
  return (
    <ButtonBox onClick={onClick}>
      {children}
    </ButtonBox>
  );
}
