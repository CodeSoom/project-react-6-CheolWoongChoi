import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RecommendMenu from '@/components/pages/home/RecommendMenu';
import SearchMenu from '@/components/pages/home/SearchMenu';

import {
  Wrapper, Title,
} from './styles';

export default function HomeContainer() {
  const [menu, setMenu] = useState('');
  const navigate = useNavigate();

  const handleChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  // eslint-disable-next-line
  const handleClickRecommendMenu = (menu) => {
    navigate('/searchResult' + `?menu=${menu}`);
  };

  const handleClickSearch = () => {
    if (!menu) {
      return;
    }

    navigate('/searchResult' + `?menu=${menu}`);
  };

  return (
    <Wrapper>
      <Title>
        Today Menu Information
      </Title>
      <RecommendMenu onClick={handleClickRecommendMenu} />
      <SearchMenu
        menu={menu}
        onChange={handleChangeMenu}
        onClick={handleClickSearch}
      />
    </Wrapper>
  );
}
