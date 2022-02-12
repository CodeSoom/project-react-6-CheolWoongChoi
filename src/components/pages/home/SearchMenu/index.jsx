import {
  SearchMenuBox, SubTitle, MenuInputBox, MenuInput, SubmitButton,
} from './styles';

export default function SearchMenu({
  menu,
  onChange,
  onClick,
}) {
  return (
    <SearchMenuBox>
      <SubTitle>
        생각나는 메뉴를 알려주세요!
      </SubTitle>
      <MenuInputBox>
        <MenuInput
          type="text"
          value={menu}
          onChange={onChange}
          placeholder="메뉴를 입력하세요"
        />
        <SubmitButton type="button" onClick={onClick}>
          검색
        </SubmitButton>
      </MenuInputBox>
    </SearchMenuBox>
  );
}
