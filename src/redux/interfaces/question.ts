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
}

export interface MultipleChoiceQuestion extends Question {
    question: string
    correctAnswer?: number
    answers: Array<string>
    images?: Array<string>
}

export interface OpeningQuestion extends Question {
    professionList: Array<string>
}

export interface OpenQuestion extends Question {
    question: string
    textInputType : TextInputType
}