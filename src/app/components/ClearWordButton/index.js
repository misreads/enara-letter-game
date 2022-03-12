import React from 'react';

import styles from './styles.module.scss';

function ClearWordButton() {
    return (
      <div className={styles.container}>
        <button className={styles.button}>
          <span className={styles.title}>
            clear word
          </span>
          <i className={styles['close-button']} />
        </button>
      </div>
    );
}

export default ClearWordButton;
