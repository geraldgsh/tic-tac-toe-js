const playBoard = (() => {
  const gridBoard = ["", "", "", "", "", "", "", "", ""];
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  return {
    gridBoard,
    winningCombination
  };
})();

const playerGenerator = (name, mark, wins, playArr) => {
  return {
    name,
    mark,
    wins,
    playArr
  };
};

const gameEngine = (() => {
  console.log("game engine started");
  // declaration of the players
  let player1 = playerGenerator("", "X", 0, []);
  let player2 = playerGenerator("", "O", 0, []);

  const gameStatus = document.querySelector(".game-status");
  const setStatus = status => {
    gameStatus.innerHTML = "";
    gameStatus.innerHTML += status.toString();
  };
  setStatus("");

  const start = () => {
    var sq = document.getElementById("squares");
    newPlayer(player1);
    newPlayer(player2);
    if (checkNames(player1.name, player2.name)) {
      sq.style.display = "grid";
    }
  };

  const startBtn = document.querySelector(".startButton");
  startBtn.addEventListener("click", start);

  const newPlayer = player => {
    // global variable declaration
    if (player === player1) {
      let player1Name = document.querySelector("#playerOneName").value;
      player1.name = player1Name;
    } else {
      let player2Name = document.querySelector("#playerTwoName").value;
      player2.name = player2Name;
    }
  };

  const checkNames = (name1, name2) => {
    if (name1 === "" || name2 === "") {
      setStatus("Names can't be blank!");
      return false;
    }
    return true;
  };

  console.warn(player1, player2);

  let numPlays = 0;
  let currPlayer = player1;

  let cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.addEventListener("click", function () {
      checkPlay(cells, this.dataset.index);
    });
  });

  const changePlayers = () => {
    if (currPlayer === player1) {
      currPlayer = player2;
    } else {
      currPlayer = player1;
    }
    setStatus(`It's ${currPlayer.name}'s turn!`);
   };

  const checkWinner = arr => {
    const result = playBoard.winningCombination.some(evt =>
      evt.every(e => arr.includes(e))
    );
    return result;
  };

  const checkPlay = (cells, cellNum) => {
    if (playBoard.gridBoard[cellNum] === "") {
      playBoard.gridBoard[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      currPlayer.playArr.push(parseInt(cellNum));

      if (checkWinner(currPlayer.playArr)) {
        
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
        endGame();
        
        const span = document.getElementsByClassName("close")[0]; 
        span.onclick = function () {
          modal.style.display = "none";
          const pieces = document.querySelectorAll('.cell')
          pieces.forEach(cell => {
            cell.innerHTML = "";
          })
          newRound();

        }           
      } else {
        changePlayers();
        numPlays++;
        // detecting a draw
        if (numPlays > 8) {
          setStatus("It's a tie!");
        }
      }
    } else {
      setStatus("Stop clicking!");
    }
  };

  const endGame = () => {
    setStatus(`${currPlayer.name} won!`)
  };

  const newRound = () => {
    playBoard.gridBoard = ["", "", "", "", "", "", "", "", ""];
    if (player1 === currPlayer) {
      player1 = playerGenerator(player1.name, player1.mark, player1.wins += 1, []);
      player2 = playerGenerator(player2.name, player2.mark, player2.wins, []);
    } else {
      player1 = playerGenerator(player1.name, player1.mark, player1.wins, []);
      player2 = playerGenerator(player2.name, player2.mark, player2.wins += 1, []);
    }
    changePlayers();
  }

})();