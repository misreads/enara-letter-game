import React from 'react';
import { string, number, bool } from 'prop-types';

import styles from './styles.module.scss';

function Tile({
 id,
 letter,
 isClickable,
 isSelected,
 containerClassName,
}) {
    return (
      <div className={containerClassName}>
        <div id={id} className={styles.container}>
          <button className={`${styles.tile} ${isSelected ? styles['tile-selected'] : ''}`} disabled={!isClickable}>
            <span className={styles.letter}>{letter}</span>
          </button>
        </div>
      </div>
    );
}

Tile.defaultProps = {
    letter: 'p',
    id: 0,
    isClickable: true,
    isSelected: false,
    containerClassName: '',
};

Tile.propTypes = {
    letter: string,
    id: number,
    isClickable: bool,
    isSelected: bool,
    containerClassName: string,
  };

export default Tile;
