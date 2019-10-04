import {MultipleChoiceQuestionAction, NewTimerAction, OpenQuestionAction, SendAction} from "./interfaces";
import {webSocket} from "../../index";
import {MultipleChoiceQuestion, TextInputType} from "../../redux/interfaces/question";

export function WaitScreenPlayer() {
    send({type: "WaitScreenPlayer"})
}

export function WaitScreenDisplay() {
    send({type: "WaitScreenDisplay"})
}

export function NewTimer(newTime: number) {
    send({type: "NewTimer", time: newTime} as NewTimerAction)
}

export function multipleChoiceQuestion(id: string, question: string, answers: string[], correctAnswer?: number) {
    send({
        type: "MultipleChoiceQuestion",
        multipleChoiceQuestion: {id, question, correctAnswer, answers}
    } as MultipleChoiceQuestionAction)
}

export function openQuestion(id: string, question: string, textInputType: TextInputType) {
    send({type: "OpenQuestion", openQuestion: {id, question, textInputType}} as OpenQuestionAction)
}

function send(obj: SendAction) {
    webSocket.send(JSON.stringify(obj));
}