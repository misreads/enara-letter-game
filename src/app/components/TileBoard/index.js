import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadBoard } from '../../../redux/actions/gameActions';

import Tile from './components/Tile';
import styles from './styles.module.scss';

function TileBoard() {
    const dispatch = useDispatch();
    const setBoard = () => {
        dispatch(loadBoard());
    };

    useEffect(() => {
        setBoard();
    }, []);

    const board = useSelector((state) => state.game.board);

    return (
      <div className={styles.container}>
        {
        board.map((row, rowId) => (
          <div id={rowId} className={styles['tile-board-row']}>
            { row.map((tile, colId) => {
                const {
                    id,
                    letter,
                    isClickable,
                    isSelected,
                } = tile;
                return (
                  <Tile
                    containerClassName={styles['tile-board']}
                    row={rowId}
                    col={colId}
                    id={id}
                    letter={letter}
                    isClickable={isClickable}
                    isSelected={isSelected}
                  />
                );
            })}
          </div>
            ))
        }
      </div>
    );
}

export default TileBoard;
