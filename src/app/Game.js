import React from 'react';

import WordInput from './components/WordInput';
import ClearWordButton from './components/ClearWordButton';
import TileBoard from './components/TileBoard';
import styles from './styles.module.scss';

import '../app.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <WordInput />
        <ClearWordButton />
        <TileBoard />
      </header>
    </div>
  );
}

export default App;
