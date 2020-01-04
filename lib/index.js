"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareCanBeSet = exports.getWinner = exports.setSquare = exports.allSquaresSet = exports.xIsNext = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var isEven = function isEven(num) {
  return num % 2 === 0;
};

var numOfMoves = function numOfMoves(board) {
  return board.reduce(function (acc, curr) {
    return curr ? acc + 1 : acc;
  }, 0);
};

var xIsNext = function xIsNext(board) {
  return isEven(numOfMoves(board));
};

exports.xIsNext = xIsNext;

var allSquaresSet = function allSquaresSet(board) {
  return numOfMoves(board) === 9;
};

exports.allSquaresSet = allSquaresSet;

var setSquare = function setSquare(board, index, playerSymbol) {
  return [].concat(_toConsumableArray(board.slice(0, index)), [playerSymbol], _toConsumableArray(board.slice(index + 1, board.length)));
};

exports.setSquare = setSquare;

var getWinner = function getWinner(board) {
  var winnerOfSet = function winnerOfSet(a, b, c) {
    return board[a] === board[b] && board[a] === board[c] && board[a];
  };

  return winnerOfSet(0, 1, 2) || winnerOfSet(3, 4, 5) || winnerOfSet(6, 7, 8) || winnerOfSet(0, 3, 6) || winnerOfSet(1, 4, 7) || winnerOfSet(2, 5, 8) || winnerOfSet(0, 4, 8) || winnerOfSet(2, 4, 6) || null;
};

exports.getWinner = getWinner;

var squareCanBeSet = function squareCanBeSet(board, index) {
  return board[index] === null && getWinner(board) === null;
};

exports.squareCanBeSet = squareCanBeSet;