import Place from '../Place';
import { PlacesBox, NoResult } from './styles';

export default function Places({ places }) {
  if (places.length === 0) {
    return (
      <PlacesBox>
        <NoResult>
          검색 결과가 없습니다... 😥
        </NoResult>
      </PlacesBox>
    );
  }

  return (
    <PlacesBox>
      {places.map((place) => (
        <Place place={place} />
      ))}
    </PlacesBox>
  );
}
