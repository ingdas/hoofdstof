export interface OpenQuestionResponseMessage {
    type: "open-question-response";
    userId: number;
    questionId: number;
    answer: string;
}
