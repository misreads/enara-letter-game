import React from 'react';
import { useDispatch } from 'react-redux';

import { cleanBoard } from '../../../redux/actions/gameActions';

import styles from './styles.module.scss';

function ClearWordButton() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cleanBoard());
    };
    return (
      <div className={styles.container}>
        <button onClick={handleClick} className={styles.button}>
          <span className={styles.title}>
            clear word
          </span>
          <i className={styles['close-button']} />
        </button>
      </div>
    );
}

export default ClearWordButton;
