import { setSquare, squareCanBeSet, xIsNext } from './index';

describe('#setSquare', () => {
  let board;

  beforeEach(() => {
    board = Array(9).fill(null);
  });

  describe('SUCCESSFUL', () => {
    it('should return new board after setting square at index 0', () => {
      const newBoard = setSquare(board, 'X', 0);
      expect(newBoard).toEqual(['X', null, null, null, null, null, null, null, null]);
    });

    it('should return new board after setting square at index 8', () => {
      const newBoard = setSquare(board, 'X', 8);
      expect(newBoard).toEqual([null, null, null, null, null, null, null, null, 'X']);
    });
  });

  describe('FAILURE', () => {
    it('should not set X when O is used', () => {
      const newBoard = setSquare(board, 'O', 0);
      expect(newBoard).not.toEqual(['X', null, null, null, null, null, null, null, null]);
    });

    it('should not be equal to previous board', () => {
      const newBoard = setSquare(board, 'X', 0);
      expect(newBoard).not.toEqual(board);
    });
  });
});

describe('#squareCanBeSet', () => {
  it('should return true', () => {
    const board = Array(9).fill(null);
    expect(squareCanBeSet(board, 0)).toEqual(true);
  });

  it('should return false', () => {
    const board = [null, null, null, 'X', null, null, null, null, null];
    expect(squareCanBeSet(board, 3)).toEqual(false);
  });
});

describe('#xIsNext', () => {
  it('should return true', () => {
    const board = Array(9).fill(null);
    expect(xIsNext(board)).toEqual(true);
  });

  it('should return true', () => {
    const board = [null, null, null, 'X', 'O', null, null, null, null];
    expect(xIsNext(board)).toEqual(true);
  });

  it('should return false', () => {
    const board = [null, null, null, 'X', null, null, null, null, null];
    expect(xIsNext(board)).toEqual(false);
  });
});
