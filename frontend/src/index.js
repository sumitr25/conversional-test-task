import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import store from './app/store';

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
serviceWorker.unregister();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}
