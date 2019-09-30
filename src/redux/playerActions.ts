import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {WindowName} from "./interfaces/windowName";
import {AppState} from "./interfaces/appState";
import {TextInputType} from "./interfaces/question";
import {Player} from "./interfaces/player";
import {LoginState, PlayerState} from "./interfaces/playerState";

export enum ActionType {
    //Used for new screens
    NewState = "NewState",
    //Used for sending the answer
    HandleAnswer = "HandleAnswer",
    //Used for setting the timer
    NewTimer = "NewTimer",
    ClearId = "ClearId",
    NewId = "NewId"
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

function dispatchAndEmit(action: Action): ThunkAction<void, AppState, { ws: WebSocket }, Action> {
    return (dispatch: any, getState: any, {ws}: { ws: WebSocket }) => {
        ws.send(JSON.stringify(action));
        dispatch(action)
    }
}

export function handleAnswer(answer: number) {
    const action: HandleAnswerAction = {type: ActionType.HandleAnswer, answer};
    return dispatchAndEmit(action)
}

export function handleTextInput(answer: string) {
    const action: HandleTextInput = {type: ActionType.HandleAnswer, answer};
    return dispatchAndEmit(action)
}

export function waitScreen(): BuilderAction {
    return {
        type: ActionType.NewState,
        player: {name: "UNKNOWN", answers: new Map<number, object>()},
        playerState: {
            windowName: WindowName.WaitScreen,
            timerState: {totalTime: -1, timeLeft: -1}
        }
    };
}

export function loginScreen(onLogin: (naam: string) => void): BuilderAction {
    return {
        type: ActionType.NewState,
        player: {name: "UNKNOWN", answers: new Map<number, object>()},
        playerState: {
            windowName: WindowName.Login,
            timerState: {totalTime: -1, timeLeft: -1},
            onLogin
        } as LoginState
    };
}

export function chartQuestion(question: string, answers: string[]): BuilderAction {
    // @ts-ignore
    return {type: ActionType.NewState, window: WindowName.ChartQuestion, payload: {question, answers}}
}

export function multipleChoiceScreen(question: string, answers: string[]): BuilderAction {
    // @ts-ignore
    return {type: ActionType.NewState, window: WindowName.AnswerQuestion, payload: {question, answers}}
}

export function textInputScreen(question: string, type: TextInputType) {
    return {type: ActionType.NewState, window: WindowName.TextInput, payload: {question, type}}
}

export function newTimer(totalTime: number, timeLeft: number): TimerAction {
    return {type: ActionType.NewTimer, totalTime, timeLeft}
}

export function adminScreen(): BuilderAction {
    return {
        type: ActionType.NewState,
        player: {name: "UNKNOWN", answers: new Map<number, object>()},
        playerState: {
            windowName: WindowName.Admin,
            timerState: {totalTime: -1, timeLeft: -1},
        }
    };
}

export function openingScreen(professionList: Array<string>): BuilderAction {
    // @ts-ignore
    return {type: ActionType.NewState, window: WindowName.Opening, payload: {professionList}}
}

export function pingScreen(notification: string): BuilderAction {
    // @ts-ignore
    return {type: ActionType.NewState, window: WindowName.Ping, payload: {notification}}
}