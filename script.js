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

  return { gridBoard, winningCombination };
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
  var player1 = playerGenerator("", "X", 0, []);
  var player2 = playerGenerator("", "O", 0, []);
  let playerX = [];
  let playerO = [];

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

  const gameStatus = document.querySelector(".game-status");
  const setStatus = status => {
    gameStatus.innerHTML = "";
    gameStatus.innerHTML += status.toString();
  };

  console.warn(player1, player2);

  let numPlays = 0;
  let currPlayer = player1;

  let board = ["", "", "", "", "", "", "", "", ""];
  let cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.addEventListener("click", function() {
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

  const changePlay = () => {};

  const checkWinner = () => {
    // if (
    //   (playBoard.gridBoard[0] &&
    //     playBoard.gridBoard[1] &&
    //     playBoard.gridBoard[2]) ||
    //   (playBoard.gridBoard[3] &&
    //     playBoard.gridBoard[4] &&
    //     playBoard.gridBoard[5]) ||
    //   (playBoard.gridBoard[6] &&
    //     playBoard.gridBoard[7] &&
    //     playBoard.gridBoard[8]) ||
    //   (playBoard.gridBoard[0] &&
    //     playBoard.gridBoard[3] &&
    //     playBoard.gridBoard[6]) ||
    //   (playBoard.gridBoard[1] &&
    //     playBoard.gridBoard[4] &&
    //     playBoard.gridBoard[7]) ||
    //   (playBoard.gridBoard[2] &&
    //     playBoard.gridBoard[5] &&
    //     playBoard.gridBoard[8]) ||
    //   (playBoard.gridBoard[0] &&
    //     playBoard.gridBoard[4] &&
    //     playBoard.gridBoard[8]) ||
    //   (playBoard.gridBoard[2] &&
    //     playBoard.gridBoard[4] &&
    //     playBoard.gridBoard[6])
    // ) {
    //   console.warn("Win!");
    // }

    console.log(
      playBoard.winningCombination.forEach(combo => {
        currPlayer.playArr.includes(combo);
      })
    );
  };

  const checkPlay = (cells, cellNum) => {
    if (playBoard.gridBoard[cellNum] === "") {
      playBoard.gridBoard[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      currPlayer.playArr.push(cellNum);
      console.log(currPlayer.playArr);
      changePlayers();
      numPlays++;
      checkWinner();

      // detecting a draw
      if (numPlays > 8) {
        setStatus("It's a tie!");
      }
    }
  };
})();
