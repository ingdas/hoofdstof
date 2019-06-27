import {List, Map} from 'immutable'
import {Action} from "redux";
import {ActionType, HandleAnswerAction} from "./actions";

export enum WindowName {
    ChartQuestion = "Chart",
    AnswerQuestion = "Answer",
    WaitScreen = "Wait"
}

export abstract class AppState {
    abstract window: WindowName;

    reduce(action: Action): AppState {
        return this;
    }
}


export class ChartQuestionState extends AppState {
    question: string;
    answers: List<string>;
    count: Map<number, number>;
    window = WindowName.ChartQuestion;


    constructor(question: string, answers: List<string>, count: Map<number, number> = Map()) {
        super();
        this.question = question;
        this.answers = answers;
        this.count = count;
    }

    reduce(action: Action): AppState {
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

export class AnswerQuestionState extends AppState {
    question: string;
    answers: List<string>;
    selected: number;
    window = WindowName.AnswerQuestion;

    constructor(question: string, answers: List<string>, selected: number = -1) {
        super();
        this.question = question;
        this.answers = answers;
        this.selected = selected;
    }

    reduce(action: Action): AppState {
        switch (action.type) {
            case ActionType.HandleAnswer:
                const {answer} = action as HandleAnswerAction;
                return new AnswerQuestionState(this.question, this.answers, answer);
            default:
                return this
        }
    }
}

export class WaitScreenState extends AppState {
    window = WindowName.WaitScreen
}
