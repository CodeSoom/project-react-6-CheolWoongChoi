import { Button } from '@/components/common';
import menus from '@/fixtures/menus';

import {
  SubTitle,
  Wrapper,
  RecommendButtons,
} from './styles';

export default function RecommendMenu({ onClick }) {
  const getRandomMenus = () => {
    const copiedMenus = [...menus];
    const randomMenus = [];

    new Array(8).fill(true).forEach(() => {
      const index = Math.floor(Math.random() * copiedMenus.length);

      randomMenus.push(...(copiedMenus.splice(index, 1)));
    });

    return randomMenus;
  };

  return (
    <Wrapper>
      <SubTitle>
        오늘의 추천
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
