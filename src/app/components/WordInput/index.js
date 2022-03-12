import React from 'react';
// import { string } from 'prop-types';

import styles from './styles.module.scss';

function WordInput() {
    return (
      <div className={styles.container}>
        <input type="text" className={styles['word-input']} value="GOP" readOnly />
        <span className={styles['word-state']}>Invalid</span>
      </div>
    );
}

// WordInput.defaultProps = {
//     letter: 'p',
// };

// WordInput.propTypes = {
//     letter: string,
//   };

export default WordInput;
