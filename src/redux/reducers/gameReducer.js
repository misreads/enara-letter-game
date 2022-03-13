import { LOAD_CLEAN_BOARD, CLEAN_BOARD, UPDATE_TILE } from '../actions/gameActions';
import { BOARD_SIZE, FIRST_BOARD } from '../../constants/boards';
import { shuffleArray } from '../../utils/functions';

const initialState = {
    board: [],
    word: '',
  };

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
        };
      }

      case UPDATE_TILE: {
        const { board, word } = state;
        const { row, col, payload: { isSelected, letter } } = action.payload;
        const updatedTile = {
            ...board[row][col], isSelected, isClickable: !isSelected,
        };
        const updatedBoard = Object.assign([...board], {
            [row]: Object.assign([...board[row]], {
              [col]: updatedTile,
            }),
          });
        const updatedWord = word.concat(letter);

        return {
          ...state,
          board: updatedBoard,
          word: updatedWord,
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  export default gameReducer;
