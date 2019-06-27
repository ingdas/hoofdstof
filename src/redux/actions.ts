import {List, Map} from "immutable";
import {AnswerQuestionState, AppState, ChartQuestionState, WaitScreenState} from "./states";

export enum ActionType {
    WaitScreen = "WaitScreen",
    AnswerQuestion = "AnswerQuestion",
    ChartQuestion = "Chartquestion",
    HandleAnswer = "HandleAnswer"
}


export interface Action {
    type: ActionType
}

export interface BuilderAction extends Action {
    build(): AppState
}

export function isBuilder(object: Action): object is BuilderAction {
    return 'build' in object;
}

export class WaitScreenAction implements BuilderAction {
    type = ActionType.WaitScreen;

    build(): AppState {
        return new WaitScreenState()
    }
}

export class AnswerQuestionAction implements BuilderAction {
    type = ActionType.AnswerQuestion;
    question: string;
    answers: List<string>;

    constructor(question: string, answers: List<string>) {
        this.question = question;
        this.answers = answers;
    }

    build(): AppState {
        return new AnswerQuestionState(this.question, this.answers)
    }

}

export class HandleAnswerAction implements Action {
    type = ActionType.HandleAnswer;
    answer: string;

    constructor(answer: string) {
        this.answer = answer;
    }
}

export class ChartQuestionAction implements BuilderAction {
    type = ActionType.ChartQuestion;
    question: string;
    answers: List<string>;

    constructor(question: string, answers: List<string>) {
        this.question = question;
        this.answers = answers;
    }

    build(): AppState {
        let ansmap = Map<string, number>();
        this.answers.forEach(v => ansmap = ansmap.set(v, 0));
        return new ChartQuestionState(this.question, ansmap)
    }
}

