import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./MultipleChoiceAnswer.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {answerQuestion} from "../../player/playerActions";
import {isDefined, vibrate} from "../../util";


interface AnswerProps {
    questionId: string
    dispatch: any;
    playerAnswer?: string;
    answer: string;
    image?: string;
}

export default ({questionId, dispatch, playerAnswer, answer, image}: AnswerProps) => {
    const active = !isDefined(playerAnswer);
    const selected = playerAnswer === answer;

    const onClick = (() => {
        if (active) {
            vibrate([100]);
            dispatch(answerQuestion(questionId, answer));
        }
    }) as MouseEventHandler;
    const color = selected ? "lightblue" : "white";

    return (
        <Grid item xs={6}>
            <Paper onClick={onClick} className="card" style={{backgroundColor: color}}>
                <Typography variant="h5" component="h2" style={{fontSize: "35px"}}>
                    {answer}
                </Typography>
                {isDefined(image) &&
                <img alt={answer} src={image} style={{width: "100px"}}/>
                }
            </Paper>
        </Grid>
    );
};
