import React from "react";
import {connect} from "react-redux";
import {DisplayPosingQuestionState, DisplayState} from "../redux/displayState";
import {OpenQuestion} from "../../player/interfaces/question";


interface Props {
    value: string
}

const OpenQuestionDisplay = ({value}: Props) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
        }}>
            <div style={{fontSize: "64px", textAlign: "center"}}>{value}</div>
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