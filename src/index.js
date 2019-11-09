import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import combine from './reducers/combine';

const store = createStore(
    combine,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    
    ,document.getElementById('root')
);
