
export const setSquare = (board, playerSymbol, index) => [
  ...board.slice(0, index),
  playerSymbol,
  ...board.slice(index + 1, board.length),
];

export const squareCanBeSet = (board, index) => board[index] === null;

const isEven = (num) => num % 2 === 0;
const numOfMoves = (board) => board.reduce((acc, curr) => (curr ? acc + 1 : acc));

export const xIsNext = (board) => isEven(numOfMoves(board));
