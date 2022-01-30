import { useState } from 'react';
import RecommendMenu from '@/components/pages/home/RecommendMenu';
import SearchMenu from '@/components/pages/home/SearchMenu';

import {
  Wrapper, Title,
} from './styles';

export default function HomeContainer() {
  const [menu, setMenu] = useState('');

  const handleChangeMenu = (e) => {
    setMenu(e.target.value);
  };

  return (
    <Wrapper>
      <Title>
        Today Menu Information
      </Title>
      <RecommendMenu />
      <SearchMenu menu={menu} onChange={handleChangeMenu} />
    </Wrapper>
  );
}
