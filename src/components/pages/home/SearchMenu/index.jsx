import { Wrapper, SubTitle } from './styles';

export default function SearchMenu({
  menu,
  onChange,
  onClick,
}) {
  return (
    <Wrapper>
      <SubTitle>
        생각나는 메뉴를 알려주세요!
      </SubTitle>
      <div>
        <input
          type="text"
          value={menu}
          onChange={onChange}
          placeholder="메뉴를 입력하세요"
        />
        <button type="button" onClick={onClick}>
          검색
        </button>
      </div>
    </Wrapper>
  );
}
