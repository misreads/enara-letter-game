export const LOAD_CLEAN_BOARD = 'LOAD_CLEAN_BOARD';
export const CLEAN_BOARD = 'CLEAN_BOARD';
export const UPDATE_TILE = 'UPDATE_TILE';

export const loadBoard = () => ({
    type: LOAD_CLEAN_BOARD,
  });

  export const cleanBoard = () => ({
    type: CLEAN_BOARD,
  });

export const updateTile = (row, col, payload) => ({
    type: UPDATE_TILE,
    payload: {
        row, col, payload,
    },
});