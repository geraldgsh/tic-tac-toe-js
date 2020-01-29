const playerGenerator = (name, mark, wins) => {
  return {
    name,
    mark,
    wins
  };
};

const gameEngine = (() => {
  console.log("game engine started");

  const start = () => {
    var sq = document.getElementById("squares");
    sq.style.display = "grid";
  };

  const startBtn = document.querySelector(".startButton");
  startBtn.addEventListener("click", start);

  const gameStatus = document.querySelector(".game-status");
  const setStatus = status => {
    gameStatus.innerHTML = "";
    gameStatus.innerHTML += status.toString();
  };

  // global variable declaration
  let player1Name = document.querySelector("#playerOneName").value;
  console.log(`first: ${player1Name}`);
  // player1Name = player1.name;
  let player2Name = document.querySelector("#playerTwoName").value;
  console.log(`second: ${player2Name}`);
  // player1Name = player1.name;

  const checkNames = (name1, name2) => {
    if (name1 === "" || name2 === "") {
      setStatus("Names can't be blank!");
    }
  };
  checkNames(player1Name, player2Name);

  // declaration of the players
  const player1 = playerGenerator("", "X", 0);
  const player2 = playerGenerator("", "O", 0);

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
