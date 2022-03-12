import React from 'react';

import WordInput from './components/WordInput';
import ClearWordButton from './components/ClearWordButton';
import TileBoard from './components/TileBoard';
import styles from './styles.module.scss';

import '../app.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles['app-container']}>
        <ClearWordButton />
        <TileBoard />
        <WordInput />
      </div>
    </div>
  );
}

export default App;
