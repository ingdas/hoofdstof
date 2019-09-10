import {List, Map} from 'immutable'
import {Action} from "redux";
import {ActionType, HandleAnswerAction, HandleTextInput} from "./actions";

export enum WindowName {
    Admin = "Admin",
    ChartQuestion = "Chart",
    AnswerQuestion = "Answer",
    WaitScreen = "Wait",
    TextInput = "Text",
    WordCloud = "WordCloud",
    Login = "Login"
}

export class TimerState {
    timeLeft: number;
    totalTime: number;

    constructor(timeLeft: number, totalTime: number) {
        this.timeLeft = timeLeft;
        this.totalTime = totalTime;
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
    type: TextInputType;
    windowName = WindowName.TextInput;


    constructor(question: string, answer: string, type: TextInputType) {
        super();
        this.question = question;
        this.answer = answer;
        this.type = type;
    }

    reduce(action: Action): WindowState {
        switch (action.type) {
            case ActionType.HandleUpdate:
                const {answer} = action as HandleTextInput;
                return new TextInputState(this.question, answer, this.type);
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
        console.log(this, action)
        switch (action.type) {
            case ActionType.HandleUpdate:
                const {answer} = action as HandleTextInput;
                return new LoginState(this.doLogin, answer);
            default:
                return this
        }
    }

}