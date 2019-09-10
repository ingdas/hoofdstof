import {Action} from "redux";
import {TimerState, WaitScreenState} from "./states";
import {AppState} from "./appstate";

export const initialState = new AppState(new WaitScreenState(), new TimerState(-1, -1));

export function reducer(state: AppState = initialState, action: Action): AppState {
    console.log(state, action)
    return state.reduce(action)
}

