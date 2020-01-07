# tic-tac-toe-game-engine 
[![Maintainability](https://api.codeclimate.com/v1/badges/9ef11b4e9786f6fa4d38/maintainability)](https://codeclimate.com/github/Nicklas766/tic-tac-toe-game-engine/maintainability)
[![Build Status](https://travis-ci.org/Nicklas766/tic-tac-toe-game-engine.svg?branch=master)](https://travis-ci.org/Nicklas766/tic-tac-toe-game-engine)

Stateless tic tac toe engine that provides a set of pure functions. You give 
the current board and additional arguments (if necessary) and get something back.

## Documentation

It's up to you to maintain the state of the board, the starting state should be `Array(9).fill(null)`.

#### `xIsNext(board: array)`
Returns true if its X (player 1) turn, else false.

#### `squareCanBeSet(board: array, index: integer)`
Returns true if square can be set, else its already set (or win has occured) so return false.

#### `allSquaresSet(board: array)`
Returns true if all squares has been set, else false.

#### `setSquare(board: array, index: integer)`
Returns a new array of the state of the board after setting a symbol ('X' or 'O') at the given index.

#### `getWinner(board: array)`
Returns the string symbol of the winner or `null` if no winner exists.
