import {
  SubTitle,
  RecommendMenus, RecommendButton,
  RecommendButtons,
} from './styles';

const menus = ['한식', '일식', '중식', '양식', '분식', '빵', '간식'];

export default function RecommendMenu() {
  return (
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
  );
}
