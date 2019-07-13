import {AppState, WindowName} from "./states";
import {ThunkAction} from "redux-thunk";
import {Action} from "redux";
import {act} from "react-dom/test-utils";

export enum ActionType {
    NewScreen = "NewScreen",
    HandleAnswer = "HandleAnswer",
    HandleUpdate = "HandleUpdate"
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
    const action : HandleTextInput= {type : ActionType.HandleAnswer, answer};
    return dispatchAndEmit(action)
}

export function handleTextUpdate(answer: string) {
    const action : HandleTextInput= {type : ActionType.HandleUpdate, answer};
    return action
}

export function waitScreen(): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.WaitScreen, payload: {}}
}

export function chartQuestion(question: string, answers: string[]): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.ChartQuestion, payload: {question, answers}}
}

export function answerQuestion(question: string, answers: string[]): BuilderAction {
    return {type: ActionType.NewScreen, window: WindowName.AnswerQuestion, payload: {question, answers}}
}
