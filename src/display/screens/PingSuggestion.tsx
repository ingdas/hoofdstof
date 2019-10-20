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
        <div style={{marginTop: "50px", color: "white"}}>
            <Paper style={{padding: "10px", fontSize: "64px", backgroundColor: "rgb(82, 22, 123)", color: "white"}}>{value}</Paper>
            <Paper style={{padding: "10px", fontSize: "30px", textAlign: "right", backgroundColor:"rgb(82, 22, 123)", color: "white"}}>Bedacht door: {name}</Paper>
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