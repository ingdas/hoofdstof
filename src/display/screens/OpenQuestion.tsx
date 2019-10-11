import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {DisplayPosingQuestionState, DisplayState, PingSuggestionState} from "../redux/displayState";
import {OpenQuestion} from "../../player/interfaces/question";


interface Props {
    value: string
}

const OpenQuestionDisplay = ({value}: Props) => {
    return (
        <div>
            <Paper style={{padding: "10px", fontSize: "64px"}}>{value}</Paper>
        </div>
    )
};

export function mapStateToProps(state: DisplayState): Props {
    return {value: ((state as DisplayPosingQuestionState).question as OpenQuestion || {}).question || ""}
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(OpenQuestionDisplay);