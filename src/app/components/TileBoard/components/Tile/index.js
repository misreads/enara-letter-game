import React from 'react';
import { string, number, bool } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { updateTile, setWord } from '../../../../../redux/actions/gameActions';

import styles from './styles.module.scss';

function Tile({
 row,
 col,
 id,
 letter,
 isClickable,
 isSelected,
 isValidTarget,
 containerClassName,
}) {
  const dispatch = useDispatch();
  const match = useSelector((state) => state.game.match);
    const handleClick = () => {
      dispatch(updateTile(row, col, { isSelected: true }));
      dispatch(setWord(letter));
    };
    return (
      <div id={id} className={containerClassName}>
        <div className={`${styles.container} ${(match && isSelected) ? styles['container-match-word'] : ''}`}>
          <button
            onClick={handleClick}
            className={`${styles.tile} 
                        ${(isValidTarget) ? styles['tile-valid-target'] : ''} 
                        ${(isSelected) ? styles['tile-selected'] : ''} 
                        ${(isSelected || !isClickable) ? styles['tile-non-clickable'] : ''} 
                        ${(match && isSelected) ? styles['tile-match-word'] : ''}`}
            disabled={!isClickable}
          >
            <span className={styles.letter}>{letter}</span>
          </button>
        </div>
      </div>
    );
}

Tile.defaultProps = {
    letter: 'p',
    row: 0,
    col: 0,
    id: 0,
    isClickable: true,
    isSelected: false,
    isValidTarget: false,
    containerClassName: '',
};

Tile.propTypes = {
    letter: string,
    row: number,
    col: number,
    id: number,
    isClickable: bool,
    isSelected: bool,
    isValidTarget: bool,
    containerClassName: string,
  };

export default Tile;
