export enum TextInputType {
    Text = "Text",
    Number = "Number"
}

export interface Answer {
    text: string
    image: string | null
}

export interface Question {
    id: string
    isObjective : boolean
}

export interface MultipleChoiceQuestion extends Question {
    question: string
    answers: Array<string>
    images?: Array<string>
}

export interface OpeningQuestion extends Question {
    professions: Array<string>
    speechQuestions: Array<string>
}

export interface OpenQuestion extends Question {
    question: string
    textInputType : TextInputType
}