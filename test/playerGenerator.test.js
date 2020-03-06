import { playerGenerator } from '../src/modules/playerGenerator';

const player1 = playerGenerator('Hemmingway', 'X', 1, [3, 4, 5, 6]);
const player2 = playerGenerator('Lemmings', 'O', 2, [0, 1, 2, 7]);

it('verify that player has a symbol', () => {
  expect(player1.mark).toBe('X');
  expect(player2.mark).toBe('O');
});

it('verify that player has a name', () => {
  expect(player1.name).toBe('Hemmingway');
  expect(player2.name).toBe('Lemmings');
  expect(player1.name === 'The rock').toEqual(false);
  expect(player2.name === 'Madonna').toEqual(false);
});

it('verify that player has a score', () => {
  expect(player1.wins).toBe(1);
  expect(player2.wins).toBe(2);
});

it('verify that player have game inputs', () => {
  expect(player1.playArr).toEqual([3, 4, 5, 6]);
  expect(player2.playArr).toEqual([0, 1, 2, 7]);
});