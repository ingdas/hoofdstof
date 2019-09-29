export interface Answer {
    text: string;
    image?: string;
}

export interface CreateMultipleChoiceQuestionAdminMessage {
    type: "create-multiple-choice-question";
    question: string;
    correctAnswer: string;
    answers: Answer[];
}
