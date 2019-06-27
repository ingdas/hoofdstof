import {WindowName} from "./states";

export enum ActionType {
    NewScreen = "NewScreen",
    HandleAnswer = "HandleAnswer"
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

export function handleAnswer(answer: number): HandleAnswerAction {
    return {type: ActionType.HandleAnswer, answer}
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
