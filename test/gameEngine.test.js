import { playerGenerator } from '../src/modules/playerGenerator';
import gameEngine from '../src/modules/gameEngine';

const player1 = playerGenerator('Hemmingway', 'X', 0, [6, 1, 0, 2]);
const player2 = playerGenerator('Lemmings', 'O', 0, [0, 1, 3, 5]);
const currPlayer = player1;

test('Check for winning combination #1', () => {
  expect(gameEngine.checkWinner(currPlayer.playArr)).toBe(true);
});

test('Check for winning combination #2', () => {
  const player = playerGenerator('', '', '', [5, 4, 3, 1]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #3', () => {
  const player = playerGenerator('', '', '', [8, 6, 7, 1]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #4', () => {
  const player = playerGenerator('', '', '', [8, 4, 1, 0, 2]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #5', () => {
  const player = playerGenerator('', '', '', [1, 2, 4, 6]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #6', () => {
  const player = playerGenerator('', '', '', [3, 0, 6, 8]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #7', () => {
  const player = playerGenerator('', '', '', [1, 2, 4, 7]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for winning combination #8', () => {
  const player = playerGenerator('', '', '', [5, 2, 1, 8]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(true);
});

test('Check for non-winning combination #1', () => {
  const currPlayer = player2;
  expect(gameEngine.checkWinner(currPlayer.playArr)).toBe(false);
});

test('Check for winning combination #2', () => {
  const player = playerGenerator('', '', '', [5, 3, 1, 8]);
  expect(gameEngine.checkWinner(player.playArr)).toBe(false);
});

test('Check for tie', () => {
  const playerOne = playerGenerator('', '', '', [1, 2, 5, 6, 7]);
  const playerTwo = playerGenerator('', '', '', [3, 4, 8, 9]);
  expect(gameEngine.checkWinner(playerOne.playArr)).toBe(false);
  expect(gameEngine.checkWinner(playerTwo.playArr)).toBe(false);
});