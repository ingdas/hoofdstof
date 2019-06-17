import React from "react";
import {AnswerC} from "./AnswerC";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";

export interface QuestionProps {
    question: string;
    answers : string[];
    answerCb: (answer: string) => void
}

export class QuestionC extends React.Component<QuestionProps> {
    constructor(question: QuestionProps) {
        super(question);
        this.state = question
    }

    render() {
        let answers = [];

        for (let i = 0; i < this.props.answers.length; i++) {
            answers.push(<AnswerC value={this.props.answers[i]}
                                  onClick={e => this.props.answerCb(this.props.answers[i])}/>)
        }

        const quest = (
            <Grid container spacing={3}>
                <Grid item xs={12} className="qTitle">{this.props.question}</Grid>
                {answers}
            </Grid>);
        return quest;
    }
}
