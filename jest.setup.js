import '@testing-library/jest-dom';

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};
