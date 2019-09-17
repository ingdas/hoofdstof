import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./AnswerC.css"
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {AnswerQuestionState} from "../redux/states";
import {connect} from "react-redux";
import {handleAnswer} from "../redux/actions";
import {vibrate} from "../util";

interface AnswerProps {
    selected: boolean;
    value: string;
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
                        {this.props.value}
                    </Typography>
                </Paper>
            </Grid>
        );

    }
}

interface OwnProps {
    index: number
}

function mapStateToProps(state: AnswerQuestionState, ownProps: OwnProps): { value: string, selected: boolean, active: boolean } {
    const value = state.answers.get(ownProps.index, "ERROR: Invalid Index");
    const selected = state.selected === ownProps.index;
    const active = state.selected < 0;
    return {value, selected, active}
}

function mapDispatchToProps(dispatch: any, ownProps: OwnProps): { onClick: MouseEventHandler } {
    return {
        onClick: (evt) => {
            vibrate([100]);
            dispatch(handleAnswer(ownProps.index));
        }
    };
}

export const Answer = connect(mapStateToProps, mapDispatchToProps)(AnswerC);