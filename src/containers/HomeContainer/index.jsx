import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RecommendMenu from '@/components/pages/home/RecommendMenu';
import { useGeoLocation } from '@/hooks';

import {
  Wrapper, Title,
} from './styles';

export default function HomeContainer() {
  const navigate = useNavigate();
  const { getLatLng } = useGeoLocation();

  const handleClickRecommendMenu = useCallback((keyword) => {
    navigate('/searchResult' + `?keyword=${keyword}`);
  }, []);

  useEffect(() => {
    getLatLng();
  }, []);

  return (
    <Wrapper>
      <Title>
        먹고 싶은 메뉴를 골라보세요! 💡
      </Title>
      <RecommendMenu onClick={handleClickRecommendMenu} />
    </Wrapper>
  );
}
