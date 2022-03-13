import React from 'react';
import { useDispatch } from 'react-redux';
import { bool } from 'prop-types';

import { cleanBoard, loadBoard } from '../../../redux/actions/gameActions';

import styles from './styles.module.scss';

function ClearButton({ clearAll }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (clearAll) {
            dispatch(loadBoard());
        }
        dispatch(cleanBoard());
    };
    return (
      <div className={styles.container}>
        <button onClick={handleClick} className={styles.button}>
          <span className={styles.title}>
            {clearAll ? 'clear board and word' : 'clear word'}
          </span>
          <i className={styles['close-button']} />
        </button>
      </div>
    );
}

ClearButton.defaultProps = {
    clearAll: false,
};

ClearButton.propTypes = {
    clearAll: bool,
  };

export default ClearButton;
