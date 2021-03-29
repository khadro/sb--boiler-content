const minus = require('../scripts/minus.js');

test('removes 2 from 3 to equal 1', () => {
  expect(minus(3, 2)).toBe(1);
});

test('removes 2 from 1 to equal -1', () => {
  expect(minus(1, 2)).toBe(-1);
});

test('removes 1 from 2 to equal 1', () => {
  expect(minus(2, 1)).toBe(1);
});
