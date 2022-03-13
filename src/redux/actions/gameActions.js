export const LOAD_CLEAN_BOARD = 'LOAD_CLEAN_BOARD';
export const CLEAN_BOARD = 'CLEAN_BOARD';
export const UPDATE_TILE = 'UPDATE_TILE';
export const SET_WORD = 'SET_WORD';

export const loadBoard = () => ({
    type: LOAD_CLEAN_BOARD,
  });

export const cleanBoard = () => ({
    type: CLEAN_BOARD,
  });

export const setWord = (letter) => ({
  type: SET_WORD,
  payload: letter,
});

export const updateTile = (row, col, payload) => ({
    type: UPDATE_TILE,
    payload: {
        row, col, payload,
    },
});
