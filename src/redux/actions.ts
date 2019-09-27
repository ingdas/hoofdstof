import {WindowState, WindowName, TextInputType} from "./states";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";

export enum ActionType {
    //Used for new screens
    NewScreen = "NewScreen",
    //Used for sending the answer
    HandleAnswer = "HandleAnswer",
    //Used for textfield updates
    HandleUpdate = "HandleUpdate",
    //Used for setting the timer
    NewTimer = "NewTimer",
    ClearLogin = "ClearLogin"
}

export interface Action {
    type: ActionType
}

export interface BuilderAction extends Action {
    window: WindowName
    payload: object
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

function dispatchAndEmit(action: Action): ThunkAction<void, WindowState, { ws: WebSocket }, Action> {
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

export function handleTextUpdate(answer: string) {
    const action: HandleTextInput = {type: ActionType.HandleUpdate, answer};
    return action
}

export function waitScreen(): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.WaitScreen, payload: {}}
}

export function loginScreen(onLogin: (naam: string) => void): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.Login, payload: {onLogin: onLogin}}
}

export function chartQuestion(question: string, answers: string[]): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.ChartQuestion, payload: {question, answers}}
}

export function multipleChoiceScreen(question: string, answers: string[]): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.AnswerQuestion, payload: {question, answers}}
}

export function textInputScreen(question : string, type : TextInputType){
    return {type: ActionType.NewScreen, window: WindowName.TextInput, payload: {question, type}}
}

export function newTimer(totalTime: number, timeLeft: number): TimerAction {
    return {type: ActionType.NewTimer, totalTime, timeLeft}
}

export function adminScreen() : BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.Admin, payload: {}}
}

export function openingScreen(professionList : Array<string>) : BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.Opening, payload: {professionList}}
}

export function pingScreen(notification : string) : BuilderAction{
    return {type: ActionType.NewScreen, window: WindowName.Ping, payload: {notification}}
}