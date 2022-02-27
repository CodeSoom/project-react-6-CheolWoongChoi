import { Link } from 'react-router-dom';
import SearchMenu from '@/components/pages/home/SearchMenu';

import { HeaderBox, HomeButton } from './styles';
import useLogics from './logics';

export default function Header() {
  const {
    menu, handleChangeMenu, handleClickSearch, handleEnterKey,
  } = useLogics();

  return (
    <HeaderBox>
      <Link to="/">
        <HomeButton>
          TMI
        </HomeButton>
      </Link>
      <SearchMenu
        menu={menu}
        onChange={handleChangeMenu}
        onClick={handleClickSearch}
        onKeyPress={handleEnterKey}
      />
    </HeaderBox>
  );
}
