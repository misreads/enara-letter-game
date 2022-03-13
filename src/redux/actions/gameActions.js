export const LOAD_CLEAN_BOARD = 'LOAD_CLEAN_BOARD';
export const UPDATE_TILE = 'UPDATE_TILE';
export const SET_WORD = 'SET_WORD';

export const loadBoard = () => ({
    type: LOAD_CLEAN_BOARD,
  });

export const updateTile = (row, col, payload) => ({
    type: UPDATE_TILE,
    payload: {
        row, col, payload,
    },
});

export const setWord = (word) => ({
    type: SET_WORD,
    payload: word,
  });
