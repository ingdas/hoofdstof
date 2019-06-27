import React from "react";
import {Answer} from "./AnswerC";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";
import {AnswerQuestionState} from "../redux/states";
import {connect} from "react-redux";

interface Props {
    question: string,
    answers: string[]
}

const QuestionC = ({question, answers}: Props) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} className="qTitle">{question}</Grid>
            {answers.map((v, index) => <Answer key={index} index={index}/>)}
        </Grid>)
};

export function mapStateToProps(state: AnswerQuestionState, ownProps: {}): Props {
    const {question, answers} = state;
    return {question, answers: answers.toJS()}
}

export function mapDispatchToProps(dispatch: any, ownProps: {}) {
    return {}
}

export const Question = connect(mapStateToProps, mapDispatchToProps)(QuestionC);