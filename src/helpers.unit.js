const { getWinners, setWinners, LocalStorage } = require('./helpers');

beforeEach((() => {
  global.localStorage = new LocalStorage();
}));

test('should localStorage is empty', () => {
  expect(getWinners().length).toBe(0);
});

test('should localStorage has winner', () => {
  setWinners('Vasya');
  setWinners('Katay');
  setWinners('Zina');
  expect(getWinners().length).toBe(3);
});

test('should localStorage has tie', () => {
  setWinners('Vasya', 'Zina');
  setWinners('Kirrill');
  setWinners('Dima', 'Zoya');
  expect(getWinners()[0].name).toEqual(['Vasya', 'Zina']);
  expect(getWinners()[2].name).toEqual(['Dima', 'Zoya']);
});
