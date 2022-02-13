import { PlaceBox, Name, Address } from './styles';

export default function Place({ place }) {
  const { address_name, place_name, place_url } = place;

  const handleClickPlace = () => {
    window.open(place_url);
  };

  return (
    <PlaceBox key={address_name} onClick={handleClickPlace}>
      <Name>{place_name}</Name>
      <Address>{address_name}</Address>
    </PlaceBox>
  );
}
