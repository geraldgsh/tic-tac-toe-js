/* eslint-disable no-unused-vars */
import { playBoard } from './playBoard';
import { playerGenerator } from './playerGenerator';

const gameEngine = (() => {
  // declaration of the players
  let player1 = playerGenerator('', 'X', 0, []);
  let player2 = playerGenerator('', 'O', 0, []);
  let numPlays = 0;
  let currPlayer = player1;

  const checkWinner = (arr) => {
    const winCombo = playBoard.winningCombination;
    const result = winCombo.some((ele) => ele.every((array) => arr.includes(array)));
    return result;
  };

  const setStatus = (status) => {
    const gameStatus = document.querySelector('.game-status');
    gameStatus.innerHTML = '';
    gameStatus.innerHTML += status.toString();
  };

  const setWinner = (status) => {
    const winner = document.querySelector('.winner-status');
    winner.innerHTML = '';
    winner.innerHTML += status.toString();
  };

  const scoreboard = () => {
    const score = document.querySelector('.score-board');
    score.innerHTML = `
    <p>Player 'X': ${player1.name} ${player1.wins} win(s)</p>
    <p>Player 'O': ${player2.name} ${player2.wins} win(s)</p>
    `;
  };

  const newPlayer = (player) => {
    if (player === player1) {
      const player1Name = document.querySelector('#playerOneName').value;
      player1.name = player1Name;
    } else {
      const player2Name = document.querySelector('#playerTwoName').value;
      player2.name = player2Name;
    }
  };

  const checkNames = (name1, name2) => {
    if (name1 === '' || name2 === '') {
      setStatus("Names can't be blank!");
      return false;
    }
    return true;
  };

  const start = () => {
    document.querySelector('.game-restart').style.display = 'inline-block';
    document.querySelector('.endGameButton').style.display = 'inline-block';
    const sq = document.getElementById('squares');
    newPlayer(player1);
    newPlayer(player2);
    if (checkNames(player1.name, player2.name)) {
      sq.style.display = 'grid';
    }
    scoreboard();
  };

  const changePlayers = () => {
    if (currPlayer === player1) {
      currPlayer = player2;
    } else {
      currPlayer = player1;
    }
    setStatus(`It's ${currPlayer.name}'s turn!`);
  };

  const clearBoard = () => {
    numPlays = 0;
    playBoard.gridBoard = ['', '', '', '', '', '', '', '', ''];
    player1 = playerGenerator(player1.name, player1.mark, player1.wins, []);
    player2 = playerGenerator(player2.name, player2.mark, player2.wins, []);
    const pieces = document.querySelectorAll('.cell');
    pieces.forEach((box) => {
      box.innerHTML = '';
    });
    scoreboard();
    changePlayers();
  };

  const endGame = () => {
    numPlays = 0;
    setWinner(`${currPlayer.name} won!`);
  };

  const newRound = () => {
    if (player1 === currPlayer) {
      player1 = playerGenerator(player1.name, player1.mark, player1.wins += 1, []);
      player2 = playerGenerator(player2.name, player2.mark, player2.wins, []);
    } else {
      player1 = playerGenerator(player1.name, player1.mark, player1.wins, []);
      player2 = playerGenerator(player2.name, player2.mark, player2.wins += 1, []);
    }
    playBoard.gridBoard = ['', '', '', '', '', '', '', '', ''];
    changePlayers();
    scoreboard();
  };

  const checkPlay = (cells, cellNum) => {
    if (playBoard.gridBoard[cellNum] === '') {
      playBoard.gridBoard[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      currPlayer.playArr.push(Number(cellNum));

      if (checkWinner(currPlayer.playArr)) {
        const modal = document.getElementById('myModal');
        modal.style.display = 'block';
        endGame();

        const span = document.getElementsByClassName('close')[0];
        span.onclick = function setSpan() {
          modal.style.display = 'none';
          newRound();
          clearBoard();
        };
      } else {
        changePlayers();
        numPlays += 1;
        // detecting a draw
        if (numPlays > 8) {
          setStatus("It's a tie!");
        }
      }
    } else {
      setStatus('Stop clicking!');
    }
  };

  const cellInput = (() => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', function setEvtListener() {
        checkPlay(cells, this.dataset.index);
      });
    });
  })();

  return {
    checkWinner,
    clearBoard,
    start,
  };
})();

export default gameEngine;
