import {Action} from "redux";
import {ActionType, BuilderAction} from "./actions";
import {AnswerQuestionState, AppState, ChartQuestionState, WaitScreenState, WindowName} from "./states";
import {fromJS} from "immutable";


export const initialState = new WaitScreenState();

export function reducer(state: AppState = initialState, action: Action): AppState {
    if (action.type === ActionType.NewScreen) {
        return build(action as BuilderAction)
    }
    return state.reduce(action)
}

function build(action: BuilderAction) {
    switch (action.window) {
        case WindowName.AnswerQuestion: {
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
    }
}