import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./AnswerC.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import {PlayerPosingQuestion} from "../../interfaces/playerState";
import {answerQuestion} from "../../playerActions";
import {vibrate} from "../../../util";
import {AppState} from "../../interfaces/appState";
import {MultipleChoiceQuestion} from "../../interfaces/question";


interface AnswerProps {
    questionId: string
    selected: boolean;
    answer: string;
    active: boolean;
    dispatch: any
    index: number
}

const AnswerC = ({questionId, selected, answer, active, index, dispatch}: AnswerProps) => {
    console.log({questionId, selected, answer, active, index, dispatch});
    const onClick = (() => {
        if (active) {
            vibrate([100]);
            dispatch(answerQuestion(questionId, answer));
        }
    }) as MouseEventHandler;
    const color = selected ? "lightblue" : "white";
    console.log(color);

    return (
        <Grid item xs={6}>
            <Paper onClick={onClick} className="card" style={{backgroundColor: color}}>
                <Typography variant="h5" component="h2">
                    {answer}
                </Typography>
            </Paper>
        </Grid>
    );
};

interface OwnProps {
    index: number
}

function mapStateToProps(state: AppState, ownProps: OwnProps): { answer: string, selected: boolean, active: boolean, questionId: string } {
    const questionInfo = ((state.playerState as PlayerPosingQuestion).question as MultipleChoiceQuestion);
    const playerAnswer = state.player.answers[questionInfo.id];

    const answer = questionInfo.answers[ownProps.index] as string;
    const selected = playerAnswer === answer;
    const active = playerAnswer === undefined;
    return {answer, selected, active, questionId: questionInfo.id}
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): { dispatch: any } {
    return {
        dispatch,
        ...ownProps
    };
}

export const MultipleChoiceAnswer = connect(mapStateToProps, mapDispatchToProps)(AnswerC);
