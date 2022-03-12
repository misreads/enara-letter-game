import React from 'react';

import styles from './styles.module.scss';

function WordInput() {
    return (
      <div className={styles.container}>
        <input type="text" className={styles['word-input']} value="GOP" readOnly />
        <span className={styles['word-state']}>Invalid</span>
      </div>
    );
}

export default WordInput;
