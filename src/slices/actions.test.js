import { initialState, actions, reducer } from '.';

const { setLatLng } = actions;

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
});
