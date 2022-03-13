import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mainReducer from './redux/reducers/mainReducer';
import Game from './app/Game';
import { initialState } from './redux/constants';

const preloadedState = {
  game: {
    ...initialState,
  },
};
// eslint-disable-next-line
const store = createStore(mainReducer, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
