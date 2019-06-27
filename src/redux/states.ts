import {List, Map} from 'immutable'
import {Action} from "redux";
import {ActionType, AnswerQuestionAction, HandleAnswerAction} from "./actions";

export class AppState {
    reduce(action: Action): AppState {
        return this;
    }
}


export class ChartQuestionState extends AppState {
    question: string;
    answers: Map<string, number>;

    constructor(question: string, answers: Map<string, number>) {
        super();
        this.question = question;
        this.answers = answers;
    }

    reduce(action: Action): AppState {
        switch (action.type) {
            case ActionType.HandleAnswer:
                const up = action as HandleAnswerAction;
                const newMap = this.answers.set(up.answer, (this.answers.get(up.answer, 0)) + 1);
                return new ChartQuestionState(this.question, newMap);
            default:
                return this
        }
    }
}

export class AnswerQuestionState extends AppState {
    question: string;
    answers: List<string>;

    constructor(question: string, answers: List<string>) {
        super();
        this.question = question;
        this.answers = answers;
    }
}

export class WaitScreenState extends AppState {
}
