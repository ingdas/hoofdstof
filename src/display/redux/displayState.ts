import {TimerState} from "../../common/timerState";
import {Question} from "../../player/interfaces/question";

export enum DisplayActionType {
    NewDisplayState = "NewDisplayState",
}

export interface NewDisplayStateAction {
    displayState: DisplayState
}

export interface DisplayState {
    timerState: TimerState
    windowName: string
}

export interface RoundIntroState extends DisplayState{
    name : string
}

export interface DisplayPosingQuestionState extends DisplayState {
    question: Question
}

export interface DisplayWaitingState extends DisplayState {
}

export interface ChartQuestionState extends DisplayState {
    question: string
    answerCount: Record<string, number>
    rightAnswer? : string
}

export interface PingSuggestionState extends DisplayState {
    suggestion: {
        value: string,
        name: string
    }
}
