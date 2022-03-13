export const LOAD_CLEAN_BOARD = 'LOAD_CLEAN_BOARD';
export const SET_WORD = 'SET_WORD';

export const loadBoard = () => ({
    type: LOAD_CLEAN_BOARD,
  });

  export const setWord = (word) => ({
    type: SET_WORD,
    payload: word,
  });
