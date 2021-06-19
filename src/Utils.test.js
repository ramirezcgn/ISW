import { suma } from './Utils';

test('suma bien', () => {
  expect(suma(0, 2)).toBe(2);
  expect(suma(2, 0)).toBe(2);
  expect(suma(2, 2)).toBe(4);
});
