import {List, Map} from 'immutable'
import {Action} from "redux";
import {ActionType, HandleAnswerAction, HandleTextInput, TimerAction} from "./actions";
import {webSocket} from "../index";

export enum WindowName {
    Admin = "Admin",
    ChartQuestion = "Chart",
    AnswerQuestion = "Answer",
    WaitScreen = "Wait",
    TextInput = "Text",
    WordCloud = "WordCloud",
    Login = "Login",
    Opening = "Opening"
}

export class TimerState {
    timeLeft: number;
    totalTime: number;
    timeOutmarker : number | null;

    constructor(timeLeft: number, totalTime: number, timeOutmarker : number | null) {
        this.timeLeft = timeLeft;
        this.totalTime = totalTime;
        this.timeOutmarker = timeOutmarker;
    }
}


export abstract class WindowState {
    abstract windowName: WindowName;

    reduce(action: Action): WindowState {
        return this;
    }
}


export class ChartQuestionState extends WindowState {
    question: string;
    answers: List<string>;
    count: Map<number, number>;
    windowName = WindowName.ChartQuestion;


    constructor(question: string, answers: List<string>, count: Map<number, number> = Map()) {
        super();
        this.question = question;
        this.answers = answers;
        this.count = count;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleAnswer:
                const up = action as HandleAnswerAction;
                const newCount = this.count.set(up.answer, (this.count.get(up.answer, 0)) + 1);
                return new ChartQuestionState(this.question, this.answers, newCount);
            default:
                return this
        }
    }
}

export class AnswerQuestionState extends WindowState {
    question: string;
    answers: List<string>;
    selected: number;
    windowName = WindowName.AnswerQuestion;

    constructor(question: string, answers: List<string>, selected: number = -1) {
        super();
        this.question = question;
        this.answers = answers;
        this.selected = selected;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleAnswer:
                const {answer} = action as HandleAnswerAction;
                return new AnswerQuestionState(this.question, this.answers, answer);
            case ActionType.NewTimer:
                if((action as TimerAction).timeLeft === 0 && this.selected === -1){
                    return new AnswerQuestionState(this.question, this.answers, 999)
                }else{
                    return this;
                }
            default:
                return this
        }
    }
}

export class WaitScreenState extends WindowState {
    windowName = WindowName.WaitScreen
}

export class AdminState extends WindowState {
    windowName = WindowName.Admin
}

export enum TextInputType {
    Text = "Text",
    Number = "Number"
}

export class TextInputState extends WindowState {
    question: string;
    answer: string;
    done: boolean;
    type: TextInputType;
    windowName = WindowName.TextInput;


    constructor(question: string, answer: string, done: boolean, type: TextInputType) {
        super();
        this.question = question;
        this.answer = answer;
        this.done = done;
        this.type = type;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleUpdate:
                const {answer} = action as HandleTextInput;
                return new TextInputState(this.question, answer, this.done, this.type);
            case ActionType.HandleAnswer:
                return new TextInputState(this.question, this.answer, true, this.type);
            case ActionType.NewTimer:
                if((action as TimerAction).timeLeft === 0 && !this.done){
                    console.log("Last minute send of ", this.answer)
                    webSocket.send(JSON.stringify({type: ActionType.HandleAnswer, answer : this.answer}));
                    return new TextInputState(this.question, this.answer, true, this.type);
                }else{
                    return this
                }
            default:
                return this
        }
    }
}

export class WordCloudState extends WindowState {
    question: string;
    count: Map<string, number>;
    windowName = WindowName.WordCloud;


    constructor(question: string, count: Map<string, number>) {
        super();
        this.question = question;
        this.count = count;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleAnswer:
                const up = action as HandleTextInput;
                const newCount = this.count.set(up.answer, (this.count.get(up.answer, 0)) + 1);
                return new WordCloudState(this.question, newCount);
            default:
                return this
        }
    }
}

export class LoginState extends WindowState {
    windowName = WindowName.Login;
    name: string;
    doLogin: (name: string) => void;

    constructor(doLogin: (name: string) => void, name: string = "") {
        super();
        this.doLogin = doLogin;
        this.name = name
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleUpdate:
                const {answer} = action as HandleTextInput;
                return new LoginState(this.doLogin, answer);
            default:
                return this
        }
    }
}

export class OpeningState extends WindowState {
    windowName = WindowName.Opening;
    professionList : Array<string>;

    constructor(professionList: Array<string>) {
        super();
        this.professionList = professionList;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.NewTimer:
                if ((action as TimerAction).timeLeft === 0) {
                    return new WaitScreenState();
                } else {
                    return this
                }
            default:
                return this
        }
    }
}