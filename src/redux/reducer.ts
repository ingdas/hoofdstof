import {Action} from "redux";
import {ActionType} from "./playerActions";
import {LOGINIDKEY, USERNAMEKEY} from "../index";
import {WindowName} from "./interfaces/windowName";
import {AppState} from "./interfaces/appState";

export const initialState = {
    player: {name: "UNKNOWN", answers: new Map<number, object>()},
    playerState: {
        windowName: WindowName.WaitScreen,
        timerState: {totalTime: -1, timeLeft: -1}
    }
};

export function reducer(state: AppState = initialState, action: Action): AppState {
    console.log(state, action);
    if (action.type === ActionType.ClearId) {
        delete window.localStorage[LOGINIDKEY];
        delete window.localStorage[USERNAMEKEY];
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    } else if (action.type === ActionType.NewId) {
        // @ts-ignore
        window.localStorage[LOGINIDKEY] = action.id
        return state
    } else if (action.type === ActionType.NewState) {
        return action as unknown as AppState
    }

    console.log("Unknown Action Type: " + action.type);
    return state
}

