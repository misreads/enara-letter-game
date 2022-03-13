import {
 LOAD_CLEAN_BOARD, CLEAN_BOARD, UPDATE_TILE, SET_WORD,
} from '../actions/gameActions';
import { BOARD_SIZE, FIRST_BOARD } from '../../constants/boards';
import { VALID_WORDS } from '../../constants/dictionary';
import { shuffleArray } from '../../utils/functions';
import { initialState } from '../constants';

    const tileInitalState = {
        id: null,
        letter: 'Ñ',
        isClickable: true,
        isSelected: false,
    };

function gameReducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD_CLEAN_BOARD: {
        const shuffledBoard = shuffleArray(FIRST_BOARD);
        const initialBoard = [...Array(BOARD_SIZE)].map(() => Array(BOARD_SIZE).fill(tileInitalState));
        const filledBoard = initialBoard.map((row, rowId) => row.map((col, colId) => ({
                    ...col,
                    id: (rowId * BOARD_SIZE) + colId,
                    letter: shuffledBoard[(rowId * BOARD_SIZE) + colId],
                })));
        return {
          ...state,
          board: filledBoard,
          word: '',
          match: false,
        };
      }

      case CLEAN_BOARD: {
        const { board } = state;
        const cleanBoard = board.map((row) => row.map((col) => ({
                    ...col,
                    isClickable: true,
                    isSelected: false,
                })));
        return {
          ...state,
          board: cleanBoard,
          word: '',
          match: false,
        };
      }

      case UPDATE_TILE: {
        const { board } = state;
        const { row, col, payload: { isSelected } } = action.payload;
        const updatedTile = {
            ...board[row][col], isSelected, isClickable: !isSelected,
        };
        const updatedBoard = Object.assign([...board], {
            [row]: Object.assign([...board[row]], {
              [col]: updatedTile,
            }),
          });

        return {
          ...state,
          board: updatedBoard,
        };
      }

      case SET_WORD: {
        const { word } = state;
        const { payload: letter } = action;

        const updatedWord = word.concat(letter);

        const lowercaseWord = updatedWord.toLowerCase();
        const filteredValidWords = VALID_WORDS.filter((validWord) => validWord.startsWith(lowercaseWord));
        let newMatch = false;
        if (filteredValidWords.includes(lowercaseWord)) {
            newMatch = true;
        }

        return {
            ...state,
            word: updatedWord,
            match: newMatch,
          };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  export default gameReducer;
