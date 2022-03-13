export const LOAD_BOARD = 'LOAD_BOARD';

export const loadBoard = (boardSize) => ({
    type: LOAD_BOARD,
    payload: boardSize,
  });
