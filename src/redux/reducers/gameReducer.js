import { LOAD_BOARD } from '../actions/gameActions';

const initialState = {
    board: [],
    loading: false,
    error: null,
  };

    const tileInitalState = {
        letter: 'A',
        isClickable: true,
        isSelected: false,
    };

function gameReducer(state = initialState, action = {}) {
    switch (action.type) {
      case LOAD_BOARD: {
        const { payload: boardSize } = action;
        const initialBoard = [...Array(boardSize)].map(() => Array(boardSize).fill(tileInitalState));

        return {
          ...state,
          board: initialBoard,
        };
      }

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  export default gameReducer;
