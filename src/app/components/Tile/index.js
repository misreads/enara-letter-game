import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Tile({ letter }) {
    return (
      <div className={styles.container}>
        <button className={styles.tile}>
          <span className={styles.letter}>{letter}</span>
        </button>
      </div>
    );
}

Tile.defaultProps = {
    letter: 'p',
};

Tile.propTypes = {
    letter: string,
  };

export default Tile;
