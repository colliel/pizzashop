import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {createStore} from "redux";
import rootReducer from "./state/rootReducer";
import {Provider} from "react-redux"
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk"


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
