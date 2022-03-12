import React from 'react';

import styles from './styles.module.scss';

function Tile() {
    return (
      <div className={styles.container}>
        <button className={styles.tile}>
          <span className={styles.letter}>P</span>
        </button>
      </div>
    );
}

export default Tile;
