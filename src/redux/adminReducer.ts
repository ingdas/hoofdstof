import {Action} from "redux";
import {ActionType} from "./playerActions";
import {AdminState} from "./interfaces/adminState";

export const initialAdminState = {
    answers: {}
} as AdminState;

export function playerReducer(state: AdminState = initialAdminState, action: Action): AdminState {
    if (action.type === ActionType.NewState) {
        return action as unknown as AdminState
    }
    return state;
}