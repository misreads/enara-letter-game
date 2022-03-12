import React, { useState } from 'react';

import Tile from './components/Tile';
import styles from './styles.module.scss';

function TileBoard() {
    const boardSize = 4;
    const tileInitalState = {
        letter: 'S',
        isClickable: true,
        isSelected: false,
    };
    const [tileBoardState] = useState([...Array(boardSize)].map(() => Array(boardSize).fill(tileInitalState)));
    return (
      <div className={styles.container}>
        {
        tileBoardState.map((row, rowId) => (
          <div id={rowId} className={styles['tile-board-row']}>
            { row.map((tile, colId) => {
                const { letter, isClickable, isSelected } = tile;
                return (
                  <Tile
                    containerClassName={styles['tile-board']}
                    id={(rowId * boardSize) + colId}
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
