import {Action} from "redux";
import {ActionType, BuilderAction, newTimer, TimerAction} from "./actions";
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
import {store} from "../index";
import {vibrate} from "../util";

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
                if(this.time.timeOutmarker != null){
                    clearTimeout(this.time.timeOutmarker);
                }
                let timeOutMarker: number | null = null;
                if(timeLeft >= 0){
                    // @ts-ignore
                    timeOutMarker = setTimeout(() => {
                        store.dispatch(newTimer(totalTime, timeLeft-1))
                    }, 1000);
                }
                switch (timeLeft) {
                    case 3: vibrate([100]); break;
                    case 2: vibrate([100,400,100]); break;
                    case 1: vibrate([100,150,100,150,100,150,100]); break;
                    case 0: vibrate([400]); break;
                }
                return new AppState(this.window.reduce(action), new TimerState(timeLeft, totalTime, timeOutMarker));
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
                vibrate([500]);
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
                vibrate([500]);
                const {question, type} = action.payload as { question: string, type: TextInputType };
                return new TextInputState(question, "", false, type)
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

