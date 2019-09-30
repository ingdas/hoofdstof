import {Player} from "./player";
import {PlayerState} from "./playerState";

export interface AppState {
    playerState : PlayerState
    player : Player
}