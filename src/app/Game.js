import React from 'react';

import WordInput from './components/WordInput';
import ClearButton from './components/ClearButton';
import TileBoard from './components/TileBoard';
import styles from './styles.module.scss';

import '../app.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles['app-container']}>
        <ClearButton />
        <TileBoard />
        <WordInput />
      </div>
    </div>
  );
}

export default App;
