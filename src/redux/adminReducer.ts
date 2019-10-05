import {AdminActionType, AdminState, NewAdminStateAction} from "./interfaces/adminState";

export const initialAdminState = {
    answers: {}
} as AdminState;

export function adminReducer(state: AdminState = initialAdminState, action: any): AdminState {
    console.log(state, action);
    switch (action.type) {
        case AdminActionType.NewAdminState: {
            return (action as unknown as NewAdminStateAction).adminState
        }
        case AdminActionType.SelectDomain : {
            return {
                ...state,
                domain: (action as { domain: number }).domain
            }
        }
        case AdminActionType.Answer : {
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.questionId]: {
                        ...state.answers[action.questionId],
                        [action.answer]: ((state.answers[action.questionId] || {})[action.answer] || 0) + 1
                    }
                }
            }
        }
    }
    return state;
}