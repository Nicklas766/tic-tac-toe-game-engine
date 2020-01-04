const isEven = (num) => num % 2 === 0;
const numOfMoves = (board) => board.reduce((acc, curr) => (curr ? acc + 1 : acc), 0);

export const xIsNext = (board) => isEven(numOfMoves(board));

export const allSquaresSet = (board) => (numOfMoves(board) === 9);

export const setSquare = (board, index, playerSymbol) => [
  ...board.slice(0, index),
  playerSymbol,
  ...board.slice(index + 1, board.length),
];

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

export const squareCanBeSet = (board, index) => board[index] === null && getWinner(board) === null;
