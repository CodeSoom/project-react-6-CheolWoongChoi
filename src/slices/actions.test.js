import { initialState, actions, reducer } from '.';

const { setLatLng, setPlaces } = actions;

describe('actions', () => {
  describe('setLatLng', () => {
    const latLng = {
      latitude: 37.125,
      longitude: 125.125,
    };

    it('위,경도 값을 저장한다.', () => {
      const state = reducer(initialState, setLatLng(latLng));

      expect(state.latLng.latitude).toBe(latLng.latitude);
      expect(state.latLng.longitude).toBe(latLng.longitude);
    });
  });

  describe('setPlaces', () => {
    const places = [{
      address_name: '서울 관악구 신림동 546-1',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 일식 > 돈까스,우동',
      distance: '867',
      id: '27508076',
      phone: '02-3281-3330',
      place_name: '온정돈까스',
      place_url: 'http://place.map.kakao.com/27508076',
      road_address_name: '서울 관악구 조원로 60',
      x: '126.909109463358',
      y: '37.4835475729473',
    },
    {
      address_name: '서울 관악구 신림동 537-20',
      category_group_code: 'FD6',
      category_group_name: '음식점',
      category_name: '음식점 > 일식 > 돈까스,우동',
      distance: '508',
      id: '1858001641',
      phone: '0507-1326-4286',
      place_name: '카츠오도',
      place_url: 'http://place.map.kakao.com/1858001641',
      road_address_name: '서울 관악구 조원로16가길 51',
      x: '126.91339360164028',
      y: '37.48246958081795',
    }];

    it('장소정보를 저장한다.', () => {
      const state = reducer(initialState, setPlaces(places));

      expect(state.places).toHaveLength(2);
    });
  });
});
