import React from 'react';
import { useSelector } from 'react-redux';

import styles from './styles.module.scss';

function WordInput() {
    const word = useSelector((state) => state.game.word);
    const match = useSelector((state) => state.game.match);
    const message = () => {
        if (word.length > 0) {
            return match ? 'valid' : 'invalid';
        }
            return '';
    };

    return (
      <div className={styles.container}>
        <input type="text" className={`${styles['word-input']} ${match && styles['word-input-valid']}`} value={word} readOnly />
        <span className={`${styles['word-state']} ${match && styles['word-state-valid']}`}>
          {message()}
        </span>
      </div>
    );
}

export default WordInput;
