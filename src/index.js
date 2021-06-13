import './scss/main.scss';
import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {reducer} from './store/reducer';

const api = createAPI();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

