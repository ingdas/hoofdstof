import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {WindowName} from "./interfaces/windowName";
import {AppState} from "./interfaces/appState";
import {Player} from "./interfaces/player";
import {LoginState, PlayerState} from "./interfaces/playerState";

export enum ActionType {
    //Used for new screens
    NewState = "NewState",
    //Used for setting the timer
    NewTimer = "NewTimer",
    ClearId = "ClearId",
    NewId = "NewId",
    AnswerQuestion = "AnswerQuestion",
    ChosenSuggestion = "ChosenSuggestion"
}

export interface Action {
    type: ActionType
}

export interface BuilderAction extends Action {
    playerState: PlayerState
    player: Player
}

export interface HandleAnswerAction extends Action {
    answer: number
}

export interface HandleTextInput extends Action {
    answer: string
}

export interface TimerAction extends Action {
    totalTime: number
    timeLeft: number
}

export interface PingScreenAction extends Action {
    suggestion: string
    source: string
}

export interface RoundIntroAction extends Action {
    name: string
}

function dispatchAndEmit(action: Action): ThunkAction<void, AppState, { ws: WebSocket }, Action> {
    return (dispatch: any, getState: any, {ws}: { ws: WebSocket }) => {
        ws.send(JSON.stringify(action));
        dispatch(action)
    }
}

export function answerQuestion(questionId: string, answer: string) {
    const action = {type: "AnswerQuestion", questionId, answer};
    return dispatchAndEmit(action)
}

export function waitScreen(): BuilderAction {
    return {
        type: ActionType.NewState,
        player: {name: "UNKNOWN", answers: {}, id: ""},
        playerState: {
            windowName: WindowName.WaitScreen,
            timerState: {totalTime: -1, timeLeft: -1, startTime: 0}
        }
    };
}

export function loginScreen(onLogin: (naam: string) => void): BuilderAction {
    return {
        type: ActionType.NewState,
        player: {name: "UNKNOWN", answers: {}, id: ""},
        playerState: {
            windowName: WindowName.Login,
            timerState: {totalTime: -1, timeLeft: -1, startTime: 0},
            onLogin
        } as LoginState
    };
}
