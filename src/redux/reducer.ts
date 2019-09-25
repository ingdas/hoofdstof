import {Action} from "redux";
import {TimerState, WaitScreenState} from "./states";
import {AppState} from "./appstate";
import {ActionType} from "./actions";
import {LOGINIDKEY, USERNAMEKEY} from "../index";

export const initialState = new AppState(new WaitScreenState(), new TimerState(-1, -1, null));

export function reducer(state: AppState = initialState, action: Action): AppState {
    console.log(state, action);
    if(action.type === ActionType.ClearLogin){
        delete window.localStorage[LOGINIDKEY];
        delete window.localStorage[USERNAMEKEY];
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }
    return state.reduce(action)
}

