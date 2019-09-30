import {WindowName} from "./windowName";
import {Question} from "./question";

export interface TimerState {
    timeLeft: number;
    totalTime: number;
}

export interface PlayerState {
    timerState: TimerState;
    windowName: WindowName
}

export interface PlayerPosingQuestion extends PlayerState {
    question: Question
}

export interface PlayerWaiting extends PlayerState {
}

export interface PingHint extends PlayerState {
    notification : string
}

export interface LoginState extends PlayerState {
    onLogin : (name : string) => void
}
