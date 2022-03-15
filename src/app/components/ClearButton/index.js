import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bool } from 'prop-types';

import { cleanBoard, loadBoard } from '../../../redux/actions/gameActions';

import styles from './styles.module.scss';

function ClearButton({ clearAll }) {
    const dispatch = useDispatch();
    const enableButton = useSelector((state) => state.game.word).length > 0;
    const handleClick = () => {
        if (clearAll) {
            dispatch(loadBoard());
        }
        dispatch(cleanBoard());
    };
    return (
      <div className={styles.container}>
        <button
          onClick={handleClick}
          className={`${styles.button} ${(enableButton || clearAll) ? '' : styles['button-disabled']}`}
          disabled={!(enableButton || clearAll)}
        >
          <span className={styles.title}>
            {clearAll ? 'clear board' : 'clear word'}
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
