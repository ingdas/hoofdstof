import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './App'
import {initialState, reducer} from "./redux/reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import ReconnectingWebSocket from "reconnecting-websocket";
import {loginScreen} from "./redux/actions";

const LOGINIDKEY = "loginID";
const USERNAMEKEY = "username";

// window.localStorage[LOGINIDKEY] = "";
// window.localStorage[USERNAMEKEY] = "";

export enum Loc {
    PLAYER,
    BEAMER
}

export const AppLocation = document.location.pathname === "/d" ? Loc.BEAMER : Loc.PLAYER;

function getURL() {
    let url = "ws://" + window.location.hostname + ":7070/";
    if (AppLocation === Loc.BEAMER) {
        url += "display";
    } else {
        url += "play";
    }
    return url
}

const ws = new ReconnectingWebSocket(getURL());
export const store = createStore(reducer, initialState, applyMiddleware(thunk.withExtraArgument({ws})));

function activateSocket() {
    ws.onmessage = (evt) => {
        const data = JSON.parse(evt.data);
        store.dispatch(data);
    };
}


function getLoginId() {
    let loginId = window.localStorage[LOGINIDKEY];
    if (loginId === "") {
        window.localStorage[LOGINIDKEY] = Math.random()
    }
    return window.localStorage[LOGINIDKEY]
}

function getUserName() {
    let loginId = window.localStorage[USERNAMEKEY];
    if (loginId === "") {
        return null
    }
    return window.localStorage[USERNAMEKEY]
}


if (AppLocation === Loc.BEAMER) {
    activateSocket();
} else {
    const onLogin = function(naam: string) {
        window.localStorage[USERNAMEKEY] = naam;
        ws.send(JSON.stringify({newstate: {name: naam, id: getLoginId()}, type: "UpdateState"}));
        activateSocket()
    };
    if(getUserName() != null){
        onLogin(getUserName())
    }else{
        store.dispatch(loginScreen(onLogin));
    }
}


const rootElement = document.getElementById('root');
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
