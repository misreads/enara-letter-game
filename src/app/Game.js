import React from 'react';

import Tile from './components/Tile';
import WordInput from './components/WordInput';
import styles from './styles.module.scss';

import '../app.scss';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <WordInput />
        <Tile />
      </header>
    </div>
  );
}

export default App;
