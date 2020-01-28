const playBoard = () => {
  const scoreRecord = ((name, symbol, wins) => {
    let getName = () => name;
    let getSymbol = () => symbol;
    let getWins = () => wins;
    const setName = (playerName) => (name = playerName)

    return { getName, getSymbol, getWins };
  });  
  
  const blankBoard = ['', '', '', '', '', '', '', '', ''];
  const winningBoard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]; 
});


const gameplay = (() => {
  const squares = Array.from(document.querySelectorAll('#board div'));
  document.getElementById('board').addEventListener('click', handleTurn);
  let board;
  let turn = 'X';  
  
  function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
      squares[index].textContent = mark;
    });
  };

  function handleTurn() {
    let idx = squares.findIndex(function(square) {
      return square === event.target;
    })
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    render()
  }

});