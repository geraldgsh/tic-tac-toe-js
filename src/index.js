/* eslint-disable no-unused-vars */
import gameEngine from './modules/gameEngine';

const eventHandler = (() => {
  const restart = document.querySelector('.game-restart');
  restart.addEventListener('click', gameEngine.clearBoard);
  const startBtn = document.querySelector('.startButton');
  startBtn.addEventListener('click', gameEngine.start);
  document.querySelector('.endGameButton').addEventListener('click', () => {
    window.location.reload();
  });
})();