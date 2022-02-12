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

  const handleClickRecommendMenu = (keyword) => {
    navigate('/searchResult' + `?keyword=${keyword}`);
  };

  const handleClickSearch = () => {
    if (!menu) {
      return;
    }

    navigate('/searchResult' + `?keyword=${menu}`);
  };

  return (
    <Wrapper>
      <Title>
        먹고 싶은 메뉴를 골라보세요! 💡
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
