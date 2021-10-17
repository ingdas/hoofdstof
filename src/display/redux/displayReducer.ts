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
    }
    return state;
}
