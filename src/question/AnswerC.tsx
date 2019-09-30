import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./AnswerC.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {connect} from "react-redux";
import {handleAnswer} from "../redux/playerActions";
import {vibrate} from "../util";
import {AppState} from "../redux/interfaces/appState";
import {PlayerPosingQuestion} from "../redux/interfaces/playerState";
import {Answer, MultipleChoiceQuestion} from "../redux/interfaces/question";


interface AnswerProps {
    selected: boolean;
    answer: Answer;
    onClick: MouseEventHandler;
    active: boolean;
}

class AnswerC extends React.Component<AnswerProps> {

    getColor(): string {
        if (this.props.selected) {
            return "lightblue"
        } else {
            return "white"
        }
    }

    render() {

        return (
            <Grid item xs={6}>
                <Paper onClick={this.props.active ? this.props.onClick : () => {
                }} className="card" style={{backgroundColor: this.getColor()}}>
                    <Typography variant="h5" component="h2">
                        {this.props.answer.text}
                    </Typography>
                </Paper>
            </Grid>
        );

    }
}

interface OwnProps {
    index: number
}

function mapStateToProps(state: AppState, ownProps: OwnProps): { answer: Answer, selected: boolean, active: boolean } {
    const questionInfo = ((state.playerState as PlayerPosingQuestion).question as MultipleChoiceQuestion);
    const playerAnswer = state.player.answers.get(questionInfo.id);

    const answer = questionInfo.answers[ownProps.index] as Answer;
    const selected = playerAnswer === ownProps.index;
    const active = playerAnswer=== undefined;
    return {answer, selected, active}
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): { onClick: MouseEventHandler } {
    return {
        onClick: (evt) => {
            vibrate([100]);
            dispatch(handleAnswer(ownProps.index));
        }
    };
}

export const MultipleChoiceAnswer = connect(mapStateToProps, mapDispatchToProps)(AnswerC);
