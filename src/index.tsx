import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {initialState, reducer} from "./redux/reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";


let url = "ws://" + window.location.hostname + ":7070/";
if (document.location.pathname === "/d") {
    url += "display";
} else {
    url += "play";
}

const ws = new WebSocket(url);

export const store = createStore(reducer, initialState, applyMiddleware(thunk.withExtraArgument({ws})));

ws.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
    store.dispatch(data)
};


const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
