import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ChangeFlavour from './views/ChangeFlavour/ChangeFlavour';

// TODO: implement routing & proper app layout once new app views become known
ReactDOM.render(
  <React.StrictMode>
    <ChangeFlavour />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
