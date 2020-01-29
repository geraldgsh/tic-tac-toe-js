const playerGenerator = (name, mark, wins) => {
  return {
    name,
    mark,
    wins
  };
};

const gameEngine = (() => {
  console.log("game engine started");
  // declaration of the players
  var player1 = playerGenerator("", "X", 0);
  var player2 = playerGenerator("", "O", 0);

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

  const checkPlay = (cells, cellNum) => {
    if (board[cellNum] === "") {
      board[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      changePlayers();
    }
  };
})();
