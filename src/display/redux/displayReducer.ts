import {DisplayActionType, DisplayState, NewDisplayStateAction} from "./displayState";

export const initialDisplayState = {
    timerState: {
        startTime: -1,
        timeLeft: -1,
        totalTime: -1
    }
} as DisplayState;

export function displayReducer(state: DisplayState = initialDisplayState, action: any): DisplayState {
    switch (action.type) {
        case DisplayActionType.NewDisplayState: {
            return (action as unknown as NewDisplayStateAction).displayState
        }
        case DisplayActionType.Answer : {
            //const answerAction = action as unknown as AnswerStateAction;
            // return {
            //     ...state,
            //     answers: {
            //         ...state.answers,
            //         [action.questionId]: {
            //             ...state.answers[action.questionId],
            //             [action.answer]: ((state.answers[action.questionId] || {})[action.answer] || 0) + 1
            //         }
            //     },
            //     firstOne : {
            //         ...state.firstOne,
            //         [action.questionId]: {
            //             ...state.firstOne[action.questionId],
            //             [action.answer]: (state.firstOne[action.questionId] || {})[action.answer] || action.name
            //         }
            //     }
            // }
        }
    }
    return state;
}