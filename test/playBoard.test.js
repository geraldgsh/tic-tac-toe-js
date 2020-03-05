const playBoard = require('../src/modules/playBoard');

test('Display X on playBoard', () => {
  playBoard.gridBoard = ['X', '', '', '', '', '', '', '', ''];
  expect(playBoard.gridBoard).toContain('X');
});

test('Display X on playBoard', () => {
  playBoard.gridBoard = ['', '', '', '', '', '', '', 'O', ''];
  expect(playBoard.gridBoard).toContain('O');
})

test('Display nothing on playBoard', () => {
  playBoard.gridBoard = ['', '', '', '', '', '', '', '', ''];
  expect(playBoard.gridBoard).toContain('');
})