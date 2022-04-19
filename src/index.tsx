import * as serviceWorker from './serviceWorker';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './player/PlayerRoot'
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import ReconnectingWebSocket from "reconnecting-websocket";
import {adminReducer, initialAdminState} from "./admin/redux/adminReducer";
import {initialPlayerState, playerReducer} from "./player/playerReducer";
import {loginScreen} from "./player/playerActions";
import {displayReducer, initialDisplayState} from "./display/redux/displayReducer";
import AdminScreen from "./admin/Admin";
import DisplayRoot from "./display/DisplayRoot";
import "./common/Common.css"

export const LOGINIDKEY = "loginID";
export const USERNAMEKEY = "username";

export enum Loc {
    PLAYER,
    BEAMER,
    ADMIN
}

export const AppLocation = document.location.pathname === "/d" ? Loc.BEAMER :
    document.location.pathname === "/a" ? Loc.ADMIN : Loc.PLAYER;

if(document.location.host !== 'hoofdstof.be') {
    document.location.host = 'hoofdstof.be';
}

if(document.location.protocol === 'https:'){
    document.location.protocol = 'http:';
}

function getURL() {
    let url = "ws://" + window.location.hostname + ":7070/";
    switch (AppLocation) {
        case Loc.ADMIN: {
            url += "admin";
            break;
        }
        case Loc.BEAMER: {
            url += "display";
            break;
        }
        case Loc.PLAYER: {
            url += "play";
            break;
        }
    }
    return url
}

export const webSocket = new ReconnectingWebSocket(getURL());
export const store =
    AppLocation === Loc.ADMIN ? createStore(adminReducer, initialAdminState, applyMiddleware(thunk.withExtraArgument({ws: webSocket})))
        : (AppLocation === Loc.PLAYER ? createStore(playerReducer, initialPlayerState, applyMiddleware(thunk.withExtraArgument({ws: webSocket})))
        : createStore(displayReducer, initialDisplayState, applyMiddleware(thunk.withExtraArgument({ws: webSocket}))));


webSocket.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
    store.dispatch(data);
};

webSocket.onopen = (evt) => {
    if (AppLocation === Loc.BEAMER) {

    } else if (AppLocation === Loc.PLAYER) {
        if (getLoginId() != null && getName() != null) {
            const id = getLoginId();
            const name = getName();
            webSocket.send(JSON.stringify({type: "Login", id, name}));
        } else {
            const onLogin = function (name: string) {
                window.localStorage[USERNAMEKEY] = name;
                webSocket.send(JSON.stringify({type: "Register", name}));
            };
            store.dispatch(loginScreen(onLogin));
        }
    }
};

function getLoginId(): string | null {
    let loginId = window.localStorage[LOGINIDKEY];
    if (loginId === undefined || loginId === "") {
        return null
    }
    return window.localStorage[LOGINIDKEY]
}

function getName(): string | null {
    let name = window.localStorage[USERNAMEKEY];
    if (name === undefined || name === "") {
        return null
    }
    return window.localStorage[USERNAMEKEY]
}

function test(name : string){
    let webSocket = new ReconnectingWebSocket(getURL());
    webSocket.send(JSON.stringify({type: "Register", name}));
    // webSocket.send(JSON.stringify({"type":"AnswerQuestion","questionId":"R0Naam","answer":"Bram" + name}));
    // if(Math.random() < 0.5){
    //     webSocket.send(JSON.stringify({"type":"AnswerQuestion","questionId":"R1Quizvraag","answer":"Manier 1"}));
    // }else{
    //     webSocket.send(JSON.stringify({"type":"AnswerQuestion","questionId":"R1Quizvraag","answer":"Manier 2"}));
    // }
    webSocket.send(JSON.stringify({"type":"AnswerQuestion","questionId":"R3Som","answer": Math.floor(Math.random()*100).toString()}));
}

if(document.location.pathname === "/test"){
    for(let i = 1 ; i < 250 ; i++){
        test("U"+i)
    }
}

const rootElement = document.getElementById('root');
if(AppLocation === Loc.PLAYER){
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootElement
    );
}else if(AppLocation === Loc.ADMIN){
    ReactDOM.render(
        <Provider store={store}>
            <AdminScreen/>
        </Provider>,
        rootElement
    );
}else if(AppLocation === Loc.BEAMER){
    const htmlTag = document.getElementById('htmlTag');
    if(htmlTag != null){
        htmlTag.classList.add("display");
    }
    ReactDOM.render(
        <Provider store={store}>
            <DisplayRoot/>
        </Provider>,
        rootElement
    );
}




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
