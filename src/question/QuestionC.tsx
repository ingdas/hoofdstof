import React from "react";
import {AnswerC} from "./AnswerC";
import "./QuestionC.css"
import {Grid} from "@material-ui/core";

export interface QuestionProps {
    question: string;
    answers: string[];
    answerCb: (answer: string) => void
}

export class QuestionC extends React.Component<QuestionProps, { sel: number }> {
    constructor(question: QuestionProps) {
        super(question);
        this.state = {sel: -1}
    }

    handeClick(index: number) {
        console.log(this)
        console.log("Clicked "+ index);
        this.props.answerCb(this.props.answers[index]);
        this.setState({sel: index})
    }

    renderAnswer(index: number) {
        return <AnswerC key={index}
                        selected={index === this.state.sel} value={this.props.answers[index]}
                        onClick={() => this.handeClick(index)}></AnswerC>
    }

    render() {
        let ansR = this.props.answers.map((e, i) => this.renderAnswer(i));
        const quest = (
            <Grid container spacing={3}>
                <Grid item xs={12} className="qTitle">{this.props.question}</Grid>
                {ansR}
            </Grid>);
        return quest;
    }
}
