import React from "react";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {MultipleChoiceAnswer} from "./AnswerC";
import {PlayerPosingQuestion} from "../redux/interfaces/playerState";
import {MultipleChoiceQuestion} from "../redux/interfaces/question";
import {AppState} from "../redux/interfaces/appState";

interface Props {
    question: string,
    answers: Array<string>
}

const QuestionC = ({question, answers}: Props) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className="qTitle">{question}</Grid>
            {answers.map((v, index) => <MultipleChoiceAnswer key={index} index={index}/>)}
        </Grid>)
};

export function mapStateToProps(state: AppState): Props {
    const questionInfo = ((state.playerState as PlayerPosingQuestion).question as MultipleChoiceQuestion);
    return questionInfo
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export const Question = connect(mapStateToProps, mapDispatchToProps)(QuestionC);