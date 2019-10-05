import {Action} from "redux";
import {AdminActionType, AdminState, NewAdminStateAction} from "./interfaces/adminState";

export const initialAdminState = {
    answers: {}
} as AdminState;

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
    }
    return state;
}