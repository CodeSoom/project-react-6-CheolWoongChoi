import { Link } from 'react-router-dom';

import { HeaderBox, HomeButton } from './styles';

export default function Header() {
  return (
    <HeaderBox>
      <Link to="/">
        <HomeButton>
          TMI
        </HomeButton>
      </Link>
    </HeaderBox>
  );
}
