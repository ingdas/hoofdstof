import {
    ChartQuestionAction,
    MultipleChoiceQuestionAction,
    NewTimerAction,
    OpeningQuestionAction,
    OpenQuestionAction,
    SendAction,
    ShowHintAction
} from "./interfaces";
import {webSocket} from "../../index";
import {TextInputType} from "../../player/interfaces/question";
import {ActionType, PingScreenAction, RoundIntroAction} from "../../player/playerActions";
// @ts-ignore
import Ding from '../../sounds/ding.wav'
// @ts-ignore
import TimerSound from "../../sounds/timer.mp3";
// @ts-ignore
import TimeUp from "../../sounds/done.wav";

let TimerAudio: any = null;
let timeEvent: any = null;

export function waitScreenPlayer() {
    send({type: "WaitScreenPlayer"})
}

export function waitScreenDisplay() {
    send({type: "WaitScreenDisplay"})
}

export function NewTimer(newTime: number) {
    send({type: "NewTimer", time: newTime} as NewTimerAction);
    clearTimeout(timeEvent);

    if (TimerAudio == null) {
        TimerAudio = new Audio();
        TimerAudio.src = TimerSound;
        TimerAudio.load();
    }

    if (newTime > 0) {
        TimerAudio.play();
        timeEvent = setTimeout(() => {
            timeUp();
            TimerAudio.pause();
            TimerAudio.currentTime = 0;
            clearTimeout(timeEvent);
            waitScreenDisplay();
            waitScreenPlayer();
        }, newTime * 1000 + 1000);
    } else {
        TimerAudio.pause();
        TimerAudio.currentTime = 0;
    }
}

export function multipleChoiceQuestion(id: string, question: string, answers: string[], images?: string[]) {
    send({
        type: "MultipleChoiceQuestion",
        multipleChoiceQuestion: {id, question, answers, images}
    } as MultipleChoiceQuestionAction)
}

export function activateQuestion(id: string) {
    send({
        type: "ActivateQuestion",
        id
    } as any)
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

export function chartQuestion(questionId: string, rightAnswer?: string) {
    send({type: "ChartQuestion", questionId, rightAnswer} as ChartQuestionAction);
    send({type: "WaitScreenPlayer"})
}

export function pingScreen(suggestion: string, source: string) {
    ding();
    send({type: ActionType.ChosenSuggestion, suggestion, source: source || "Niemand"} as PingScreenAction);
    send({type: "WaitScreenPlayer"})
}

export function roundIntro(name: string) {
    send({type: "RoundIntro", name} as RoundIntroAction);
    send({type: "WaitScreenPlayer"})
}

function ding() {
    let audio = new Audio();
    audio.src = Ding;
    audio.load();
    audio.play();
}

function timeUp() {
    let audio = new Audio();
    audio.src = TimeUp;
    audio.volume = 0.25;
    audio.load();
    audio.play();
}

function send(obj: SendAction) {
    webSocket.send(JSON.stringify(obj));
}