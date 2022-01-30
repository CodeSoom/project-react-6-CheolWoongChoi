import { isEmptyObj } from './common';

describe('commonUtil', () => {
  describe('isEmptyObj', () => {
    it('빈 객체이면, true를 반환한다.', () => {
      const obj = {};

      expect(isEmptyObj(obj)).toBe(true);
    });

    it('빈 객체가 아니면, false를 반환한다.', () => {
      const obj = { text: 'hi' };

      expect(isEmptyObj(obj)).toBe(false);
    });
  });
});
