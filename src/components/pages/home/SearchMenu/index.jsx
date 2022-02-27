import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import {
  SearchMenuBox, MenuInputBox, MenuInput, SubmitButton,
} from './styles';

export default function SearchMenu({
  menu,
  onChange,
  onClick,
  onKeyPress,
}) {
  return (
    <SearchMenuBox>
      <MenuInputBox>
        <MenuInput
          type="text"
          value={menu}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder="메뉴를 입력하세요"
        />
        <SubmitButton role="search" type="button" onClick={onClick}>
          <FontAwesomeIcon icon={solid('magnifying-glass')}>
            검색
          </FontAwesomeIcon>
        </SubmitButton>
      </MenuInputBox>
    </SearchMenuBox>
  );
}
