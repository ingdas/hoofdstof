import React from "react";
import Question from "./Question";
import {AnswerC} from "./AnswerC";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";

export class QuestionC extends React.Component<Question> {
    constructor(question: Question) {
        super(question);
        this.state = question
    }

    render() {
        let answers = [];

        for (let i = 0; i < this.props.answers.length; i++) {
            answers.push(<AnswerC value={this.props.answers[i]}/>)
        }

        const quest = (
            <Grid container spacing={3}>
                <Grid item xs={12} className="qTitle">{this.props.question}</Grid>
                {answers}
            </Grid>);
        return quest;
    }
}
