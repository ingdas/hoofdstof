import React from "react";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";
import {MultipleChoiceQuestion} from "../../player/interfaces/question";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";


interface Props {
    question: MultipleChoiceQuestion
    playerAnswer?: string
    dispatch: any
}

export default ({question, playerAnswer, dispatch}: Props) => {
    question = question || {};
    const answers = question.answers || [];
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className="qTitle">{question.question}</Grid>
            {answers.map((v, index) =>
                <MultipleChoiceAnswer
                    key={index}
                    questionId={question.id}
                    answer={answers[index]}
                    playerAnswer={playerAnswer}
                    image={question.images && question.images[index]}
                    dispatch={dispatch}
                />)}
        </Grid>)
};
