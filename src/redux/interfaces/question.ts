export enum TextInputType {
    Text = "Text",
    Number = "Number"
}

export interface Answer {
    text: string
    image: string | null
}

export interface Question {
    id: number
}

export interface MultipleChoiceQuestion extends Question {
    question: string
    answers: Array<Answer>
    isObjective: boolean
}

export interface OpeningQuestion extends Question {
    professionList: Array<string>
}

export interface OpenQuestion extends Question {
    question: string
    isObjective: boolean
    type : TextInputType
}