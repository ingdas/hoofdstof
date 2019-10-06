import {
    MultipleChoiceQuestionAction,
    NewTimerAction,
    OpeningQuestionAction,
    OpenQuestionAction,
    SendAction,
    ShowHintAction
} from "./interfaces";
import {webSocket} from "../../index";
import {TextInputType} from "../../redux/interfaces/question";

export function waitScreenPlayer() {
    send({type: "WaitScreenPlayer"})
}

export function waitScreenDisplay() {
    send({type: "WaitScreenDisplay"})
}

export function NewTimer(newTime: number) {
    send({type: "NewTimer", time: newTime} as NewTimerAction)
}

export function multipleChoiceQuestion(id: string, question: string, answers: string[]) {
    send({
        type: "MultipleChoiceQuestion",
        multipleChoiceQuestion: {id, question, answers}
    } as MultipleChoiceQuestionAction)
}

export function openQuestion(id: string, question: string, textInputType: TextInputType) {
    send({type: "OpenQuestion", openQuestion: {id, question, textInputType}} as OpenQuestionAction)
}

export function openingScreen(professions: Array<string>, speechQuestions: Array<string>) {
    send({
        type: "OpeningQuestion",
        openingQuestion: {id: "R0Opening", professions, speechQuestions}
    } as OpeningQuestionAction)
}

export function showHint(hint: string, questionIds: Array<string>, rightAnswers: Array<string>) {
    send({type: "ShowHint", hint: {hint, questionIds, rightAnswers}} as ShowHintAction)
}

function send(obj: SendAction) {
    webSocket.send(JSON.stringify(obj));
}