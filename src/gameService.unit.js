const { gameStatus } = require('./gameService');

test('X should win rows', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('Y should win rows', () => {
  const board = [['', '', ''], ['Y', 'Y', 'Y'], ['', '', '']];
  expect(gameStatus(board)).toBe('Y');
});

test('X should win columns', () => {
  const board = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
  expect(gameStatus(board)).toBe('X');
});

test('Y should win columns', () => {
  const board = [['Y', '', ''], ['Y', '', ''], ['Y', '', '']];
  expect(gameStatus(board)).toBe('Y');
});

test('X should win diahonal right to left', () => {
  const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
  expect(gameStatus(board)).toBe('X');
});

test('Y should win diagonal left to right', () => {
  const board = [['Y', '', ''], ['', 'Y', ''], ['', '', 'Y']];
  expect(gameStatus(board)).toBe('Y');
});

test('should be tie between Y and Z', () => {
  let board = [['Y', 'X', 'Y'], ['X', 'X', 'Y'], ['X', 'Y', 'X']];
  expect(gameStatus(board)).toBe('tie');
  board = [['X', 'X', 'Y'], ['Y', 'X', 'X'], ['X', 'Y', 'Y']];
  expect(gameStatus(board)).toBe('tie');
});
