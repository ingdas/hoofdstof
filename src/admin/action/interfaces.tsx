import {MultipleChoiceQuestion, OpenQuestion} from "../../redux/interfaces/question";

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