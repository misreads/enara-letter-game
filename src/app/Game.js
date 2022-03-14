import React from 'react';

import { USE_CLEAN_ALL } from '../constants/config';

import WordInput from './components/WordInput';
import ClearButton from './components/ClearButton';
import TileBoard from './components/TileBoard';
import styles from './styles.module.scss';

import '../app.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles['app-container']}>
        <section className={styles['app-buttons']}>
          <div className={styles['button-container']}>
            <ClearButton />
            {USE_CLEAN_ALL && <ClearButton clearAll />}
          </div>

        </section>
        <section className={styles['app-board']}>
          <TileBoard />
        </section>
        <section className={styles['app-input']}>
          <WordInput />
        </section>
      </div>
    </div>
  );
}

export default App;
