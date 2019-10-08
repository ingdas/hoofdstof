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
    console.log(question, playerAnswer)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className="qTitle">{question.question}</Grid>
            {question.answers.map((v, index) =>
                <MultipleChoiceAnswer
                    key={index}
                    questionId={question.id}
                    answer={question.answers[index]}
                    playerAnswer={playerAnswer}
                    image={question.images && question.images[index]}
                    dispatch={dispatch}
                />)}
        </Grid>)
};
