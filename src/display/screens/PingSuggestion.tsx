import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {DisplayState, PingSuggestionState} from "../redux/displayState";


interface Props {
    value: string
    name: string
}

const PingSuggestionC = ({value, name}: Props) => {
    return (
        <div>
            <Paper style={{fontSize: "64px"}}>{value}</Paper>
            <Paper style={{fontSize: "30px"}}>Gegeven door: {name}</Paper>
        </div>
    )
};

export function mapStateToProps(state: DisplayState): Props {
    return (state as PingSuggestionState).suggestion
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PingSuggestionC);