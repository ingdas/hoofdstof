export interface OpenQuestionResponseMessage {
    type: "multiple-choice-question-response";
    userId: number;
    questionId: number;
    answer: string;
}
