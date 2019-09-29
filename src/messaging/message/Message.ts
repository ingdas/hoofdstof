import {RegisterPlayerMessage} from "./outgoing/player/RegisterPlayerMessage";
import {LoginPlayerMessage} from "./outgoing/player/LoginPlayerMessage";
import {LoggedInPlayerMessage} from "./incoming/player/LoggedInPlayerMessage";

export type PlayerMessage = RegisterPlayerMessage | LoginPlayerMessage | LoggedInPlayerMessage
export type Message = PlayerMessage
