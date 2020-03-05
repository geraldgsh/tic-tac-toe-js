import { playBoard } from '../src/modules/playBoard';
import { playerGenerator } from '../src/modules/playerGenerator';

let player1 = playerGenerator('Hemmingway', 'X', 0, []);
let player2 = playerGenerator('Lemmings', 'O', 0, []);
let currPlayer = player1;

test('Check if current player is Player1, Hemmingway', () => {
  expect(currPlayer.name).toBe('Hemmingway');
});

test('Check if Player2 name; Lemmings', () => {
  expect(player2.name).toBe('Lemmings');
});