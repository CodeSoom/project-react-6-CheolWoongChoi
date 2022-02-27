import { memo, useCallback } from 'react';

import { Button } from '@/components/common';
import menus from '@/fixtures/menus';

import {
  SubTitle,
  Wrapper,
  RecommendButtons,
} from './styles';

const RECOMMEND_MENU_COUNT = 16;

function RecommendMenu({ onClick }) {
  const getRandomMenus = useCallback(() => {
    const copiedMenus = [...menus];
    const randomMenus = [];

    new Array(RECOMMEND_MENU_COUNT).fill(true).forEach(() => {
      const index = Math.floor(Math.random() * copiedMenus.length);

      randomMenus.push(...(copiedMenus.splice(index, 1)));
    });

    return randomMenus;
  }, []);

  return (
    <Wrapper>
      <SubTitle>
        메뉴를 추천해봤어요! 😁
      </SubTitle>
      <RecommendButtons>
        {getRandomMenus().map((menu, idx) => (
          <Button key={`button-${idx}`} onClick={() => onClick(menu)}>
            {menu}
          </Button>
        ))}
      </RecommendButtons>
    </Wrapper>
  );
}

export default memo(RecommendMenu);
