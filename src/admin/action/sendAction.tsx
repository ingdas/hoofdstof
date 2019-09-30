import {NewTimerAction, SendAction} from "./interfaces";
import {webSocket} from "../../index";

export function WaitScreenPlayer() {
    send({type: "WaitScreenPlayer"})
}

export function WaitScreenDisplay() {
    send({type: "WaitScreenDisplay"})
}

export function NewTimer(newTime: number) {
    send({type: "NewTimer", time: newTime} as NewTimerAction)
}

function send(obj: SendAction) {
    webSocket.send(JSON.stringify(obj));
}