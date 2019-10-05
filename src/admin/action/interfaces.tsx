import {MultipleChoiceQuestion, OpeningQuestion, OpenQuestion} from "../../redux/interfaces/question";
import {PlayerHint} from "../../redux/interfaces/playerState";

export interface SendAction {
    type: string
}

export interface NewTimerAction extends SendAction {
    time: number
}

export interface MultipleChoiceQuestionAction extends SendAction {
    multipleChoiceQuestion: MultipleChoiceQuestion
}

export interface OpenQuestionAction extends SendAction {
    openQuestion: OpenQuestion
}

export interface OpeningQuestionAction extends SendAction {
    openingQuestion: OpeningQuestion
}

export interface ShowHintAction extends SendAction {
    hint: PlayerHint
}