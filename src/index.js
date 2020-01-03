
export const squareCanBeSet = (board, index) => board[index] === null;

export const setSquare = (board, playerSymbol, index) => [
  ...board.slice(0, index),
  playerSymbol,
  ...board.slice(index + 1, board.length),
];


const isEven = (num) => num % 2 === 0;
const numOfMoves = (board) => board.reduce((acc, curr) => (curr ? acc + 1 : acc));

export const xIsNext = (board) => isEven(numOfMoves(board));


export const getWinner = (board) => {
  const winnerOfSet = (a, b, c) => (board[a] === board[b] && board[a] === board[c]) && board[a];

  return winnerOfSet(0, 1, 2)
      || winnerOfSet(3, 4, 5)
      || winnerOfSet(6, 7, 8)
      || winnerOfSet(0, 3, 6)
      || winnerOfSet(1, 4, 7)
      || winnerOfSet(2, 5, 8)
      || winnerOfSet(0, 4, 8)
      || winnerOfSet(2, 4, 6)
      || null;
};
