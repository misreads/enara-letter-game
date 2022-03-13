import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';

function WordInput() {
    const word = useSelector((state) => state.game.word);
    return (
      <div className={styles.container}>
        <input type="text" className={styles['word-input']} value={word} readOnly />
        <span className={styles['word-state']}>Invalid</span>
      </div>
    );
}

export default WordInput;
