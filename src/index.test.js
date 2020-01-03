import {
  setSquare, squareCanBeSet, xIsNext, getWinner, allSquaresSet,
} from './index';


describe('#setSquare', () => {
  let board;

  beforeEach(() => {
    board = Array(9).fill(null);
  });

  describe('SUCCESSFUL', () => {
    it('should return new board after setting square at index 0', () => {
      const newBoard = setSquare(board, 0, 'X');
      expect(newBoard).toEqual(['X', null, null, null, null, null, null, null, null]);
    });

    it('should return new board after setting square at index 8', () => {
      const newBoard = setSquare(board, 8, 'X');
      expect(newBoard).toEqual([null, null, null, null, null, null, null, null, 'X']);
    });
  });

  describe('FAILURE', () => {
    it('should not set X when O is used', () => {
      const newBoard = setSquare(board, 0, 'O');
      expect(newBoard).not.toEqual(['X', null, null, null, null, null, null, null, null]);
    });

    it('should not be equal to previous board', () => {
      const newBoard = setSquare(board, 0, 'X');
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


describe('#getWinner', () => {
  describe('no winner', () => {
    it('should return null because no winner exists', () => {
      const board = Array(9).fill(null);
      expect(getWinner(board)).toEqual(null);
    });

    it('should return null because game ended without winner', () => {
      const board = [
        'X', 'O', 'X',
        'O', 'X', 'X',
        'O', 'X', 'O',
      ];
      expect(getWinner(board)).toEqual(null);
    });

    it('should return null because no win', () => {
      const board = [
        'X', 'X', null,
        'O', 'O', null,
        null, null, null,
      ];
      expect(getWinner(board)).toEqual(null);
    });
  });

  describe('horizontal wins', () => {
    it('should return X', () => {
      const board = [
        'X', 'X', 'X',
        'O', 'O', null,
        null, null, null,
      ];
      expect(getWinner(board)).toEqual('X');
    });

    it('should return O', () => {
      const board = [
        'X', 'X', null,
        'O', 'O', 'O',
        null, null, 'X',
      ];
      expect(getWinner(board)).toEqual('O');
    });

    it('should return X', () => {
      const board = [
        'X', 'O', null,
        'O', 'O', null,
        'X', 'X', 'X',
      ];
      expect(getWinner(board)).toEqual('X');
    });
  });

  describe('vertical wins', () => {
    it('should return X', () => {
      const board = [
        'X', 'O', null,
        'X', 'O', null,
        'X', 'X', 'O',
      ];
      expect(getWinner(board)).toEqual('X');
    });

    it('should return O', () => {
      const board = [
        'X', 'O', null,
        'X', 'O', 'X',
        null, 'O', null,
      ];
      expect(getWinner(board)).toEqual('O');
    });

    it('should return X', () => {
      const board = [
        'O', 'X', 'X',
        'O', 'O', 'X',
        'X', 'O', 'X',
      ];
      expect(getWinner(board)).toEqual('X');
    });
  });

  describe('diagonal wins', () => {
    it('should return X', () => {
      const board = [
        'X', 'O', null,
        null, 'X', 'O',
        null, null, 'X',
      ];
      expect(getWinner(board)).toEqual('X');
    });

    it('should return O', () => {
      const board = [
        'X', null, 'O',
        'X', 'O', 'X',
        'O', null, null,
      ];
      expect(getWinner(board)).toEqual('O');
    });
  });
});


describe('#allSquaresSet', () => {
  it('should return true because board contains 9 strings', () => {
    const board = Array(9).fill('X');
    expect(allSquaresSet(board)).toEqual(true);
  });

  it('should return false because board contains 9 nulls', () => {
    const board = Array(9).fill(null);
    expect(allSquaresSet(board)).toEqual(false);
  });

  it('should return false because board contains 8 strings and 1 null', () => {
    const board = [...Array(8).fill('X'), null];
    expect(allSquaresSet(board)).toEqual(false);
  });
});
