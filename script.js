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
    var sq = document.getElementById('squares');
    sq.style.display = "grid";
  }  
  const startBtn = document.querySelector('.startButton');
  startBtn.addEventListener('click', start);
  

  const newPlayer = () => {}
  
  // global variable declaration
  const player1Name = document.querySelector("#playerOneName").value;
  const player2Name = document.querySelector("#playerTwoName").value;
  const checkNames = (name1, name2) => {
    if (name1 === "" || name2 === "") {
      return alert("names cant be blank");
    }
  };
  checkNames(player1Name, player2Name);
  

  // declaration of the players
  const player1 = playerGenerator(player1Name, "X", 0);
  const player2 = playerGenerator(player2Name, "O", 0);
  console.warn(player1, player2);

  const gameStatus = document.querySelector(".game-status");
  let numPlays = 0;
  let currPlayer = player1;

  let board = ["", "", "", "", "", "", "", "", ""];
  let cells = document.querySelectorAll(".cell");

  cells.forEach(cell => {
    cell.addEventListener("click", function () {
      checkPlay(cells, this.dataset.index)
    });
  });

  const changePlayers = currPlayer => {
    if (currPlayer === player1) {
      return currPlayer = player2;
    } else {
      return currPlayer = player1;
    }
  };

  const checkPlay = (cells, cellNum) => {
    if (board[cellNum] === "") {
      board[cellNum] = currPlayer.mark;
      cells[cellNum].innerHTML += currPlayer.mark;
      changePlayers(currPlayer);
    }
  };

  const setStatus = status => {
    gameStatus.innerHTML = "";
    gameStatus.innerHTML += status.toString();
  };

  // const gameplay = () => {
  //   while (gameComplete()) {}
  // };

  // const restart = () => {

  // }
})();