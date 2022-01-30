import { useState } from 'react';

import {
  Wrapper, Title, RecommendMenus, RecommendButton, SubTitle, RecommendButtons, SearchMenu,
} from './styles';

const menus = ['한식', '일식', '중식', '양식', '분식', '빵', '간식'];

export default function HomeContainer() {
  const [searchText, setSearchText] = useState('');

  return (
    <Wrapper>
      <Title>
        Today Menu Information
      </Title>
      <RecommendMenus>
        <SubTitle>
          오늘의 추천
        </SubTitle>
        <RecommendButtons>
          {menus.map((menu, idx) => (
            <RecommendButton key={`menu-${idx}`}>
              {menu}
            </RecommendButton>
          ))}
        </RecommendButtons>
      </RecommendMenus>
      <SearchMenu>
        <SubTitle>
          생각나는 음식을 알려주세요!
        </SubTitle>
        <div>
          <input type="text" value={searchText} />
          <button type="button">
            검색
          </button>
        </div>
      </SearchMenu>
    </Wrapper>
  );
}
