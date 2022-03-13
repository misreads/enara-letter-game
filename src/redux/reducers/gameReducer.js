import { LOAD_CLEAN_BOARD } from '../actions/gameActions';
import { BOARD_SIZE, FIRST_BOARD } from '../../constants/boards';
import { shuffleArray } from '../../utils/functions';

const initialState = {
    board: [],
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
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  export default gameReducer;
