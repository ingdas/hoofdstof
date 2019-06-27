import {Action} from "redux";
import {isBuilder} from "./actions";
import {AppState, WaitScreenState} from "./states";


const initialState = new WaitScreenState();

function reducer(state: AppState = initialState, action: Action): AppState {
    if (isBuilder(action)) {
        return action.build()
    }
    return state.reduce(action)
}
