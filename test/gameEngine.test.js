import { playerGenerator } from '../src/modules/playerGenerator';
import gameEngine from '../src/modules/gameEngine';

const player1 = playerGenerator('Hemmingway', 'X', 0, [6, 1, 0, 2]);
const player2 = playerGenerator('Lemmings', 'O', 0, [0, 1, 3, 5]);
const currPlayer = player1;

test('Check if current player is Player1, Hemmingway', () => {
  expect(currPlayer.name).toBe('Hemmingway');
});

test('Check if Player2 name; Lemmings', () => {
  expect(player2.name).toBe('Lemmings');
});

test('Check for winning combination #1', () => {
  expect(gameEngine.checkWinner(currPlayer.playArr)).toBe(true);
});

test('Check for winning combination #2', () => {
  const player = playerGenerator('', '', '', [5, 4, 3, 1]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for non-winning combination #1', () => {
  const currPlayer = player2;
  expect(gameEngine.checkWinner(currPlayer.playArr)).toBe(false);
});
