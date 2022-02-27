import { useSelector } from 'react-redux';
import useGeoLocation from './useGeoLocation';

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};

describe('useGeoLocation', () => {
  useSelector.mockImplementation((selector) => selector({
    latLng: {
      latitude: 0,
      longitude: 0,
    },
  }));

  const { getCurrentPosition } = global.navigator.geolocation;
  const { isNoLatLng, getLatLng } = useGeoLocation();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      latLng: {
        latitude: 1,
        longitude: 2,
      },
    }));

    getCurrentPosition.mockClear();
  });

  describe('isNoLatLng', () => {
    it('위치정보가 없으면, true를 반환한다.', () => {
      const latLng = {
        latitude: 0,
        longitude: 0,
      };

      expect(isNoLatLng(latLng)).toBe(true);
    });

    it('위치정보가 있으면, false를 반환한다.', () => {
      const latLng = {
        latitude: 37,
        longitude: 125,
      };

      expect(isNoLatLng(latLng)).toBe(false);
    });
  });

  describe('getLatLng', () => {
    it('위치정보가 없으면, 위치정보를 가져온다.', async () => {
      const { latLng } = useSelector((state) => state);
      console.log('위치정보 없음');
      console.log(isNoLatLng(latLng));

      await getLatLng();

      await expect(getCurrentPosition).toBeCalled();
    });

    it('위치정보가 있으면, 아무 것도 하지 않는다.', async () => {
      useSelector.mockImplementation((selector) => selector({
        latLng: {
          latitude: 37.125,
          longitude: 125.125,
        },
      }));

      const { latLng } = useSelector((state) => state);
      console.log('위치정보 있음');
      console.log(isNoLatLng(latLng));

      await getLatLng();

      await expect(getCurrentPosition).not.toBeCalled();
    });
  });
});
