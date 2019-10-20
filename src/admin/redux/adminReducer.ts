import {AdminActionType, AdminState, NewAdminStateAction} from "./adminState";

export const initialAdminState = {
    answers: {},
    firstOne: {}
} as AdminState;

function welcome(str: string) {
    // let audio = new Audio();
    // const escaped = escape(str);
    // audio.src = "https://code.responsivevoice.org/getvoice.php?t=Dag,%20" + escaped + ",%20Welkom%20bij%20hoofdstof&tl=nl&sv=g1&vn=&pitch=0.5&rate=0.5&vol=1&gender=female";
    // audio.load();
    // audio.play();
}

export function adminReducer(state: AdminState = initialAdminState, action: any): AdminState {
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
        case AdminActionType.SetConnections : {
            return {
                ...state,
                connections: (action as { amount: number }).amount
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
                },
                firstOne: {
                    ...state.firstOne,
                    [action.questionId]: {
                        ...state.firstOne[action.questionId],
                        [action.answer]: (state.firstOne[action.questionId] || {})[action.answer] || action.name
                    }
                }
            }
        }
        case "Welcome" : {
            welcome(action.name)
        }
    }
    return state;
}