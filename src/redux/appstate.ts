import {Action} from "redux";
import {ActionType, BuilderAction, TimerAction} from "./actions";
import {
    AdminState,
    AnswerQuestionState,
    ChartQuestionState,
    LoginState,
    TextInputState,
    TextInputType,
    TimerState,
    WaitScreenState,
    WindowName,
    WindowState,
    WordCloudState
} from "./states";
import {fromJS, Map} from "immutable";

export class AppState {
    window: WindowState;
    time: TimerState;

    constructor(window: WindowState, time: TimerState) {
        this.window = window;
        this.time = time;
    }

    reduce(action: Action): AppState {
        switch (action.type) {
            case ActionType.NewTimer: {
                const {totalTime, timeLeft} = action as TimerAction;
                return new AppState(this.window, new TimerState(timeLeft, totalTime));
            }
            case ActionType.NewScreen: {
                return new AppState(this.build(action as BuilderAction), this.time);
            }
            default:
                return new AppState(this.window.reduce(action), this.time);
        }
    }

    build(action: BuilderAction) : WindowState{
        switch (action.window) {
            case WindowName.AnswerQuestion: {
                window.navigator.vibrate([500]);
                const {question, answers} = action.payload as { question: string, answers: string[] };
                return new AnswerQuestionState(question, fromJS(answers), -1);
            }
            case WindowName.ChartQuestion: {
                const {question, answers} = action.payload as { question: string, answers: string[] };
                return new ChartQuestionState(question, fromJS(answers));
            }
            case WindowName.WaitScreen: {
                return new WaitScreenState();
            }
            case WindowName.WordCloud: {
                const {question} = action.payload as { question: string };
                return new WordCloudState(question, Map<string, number>())
            }
            case WindowName.TextInput: {
                window.navigator.vibrate([500]);
                const {question, type} = action.payload as { question: string, type: TextInputType };
                return new TextInputState(question, "", type)
            }
            case WindowName.Login : {
                const {onLogin} = action.payload as { onLogin: (naam: String) => void };
                return new LoginState(onLogin)
            }
            case WindowName.Admin: {
                return new AdminState()
            }
        }
    }

}

