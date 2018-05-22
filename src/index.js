import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initializeApp, firestore } from 'firebase';
import {config, firestoreConfig} from './util/fb-config';
import reducers from './store/reducers';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers);

initializeApp(config);
firestore();
firestore().settings(firestoreConfig)

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider> ), 
    document.getElementById('root')
);
// registerServiceWorker();
