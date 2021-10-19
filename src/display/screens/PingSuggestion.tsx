import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {DisplayState, PingSuggestionState} from "../redux/displayState";
import {styled} from "@material-ui/core";


interface Props {
    value: string
    name: string
}

const PingSuggestionC = ({value, name}: Props) => {
    return (
        <div style={{paddingTop: "20%", color: "white"}}>
            <Paper style={{padding: "10px", fontSize: "90px", backgroundColor: "rgb(82, 22, 123)", color: "white"}}>{value}</Paper>
            <div style={{height: "10px"}}></div>
            <Paper style={{padding: "10px", fontSize: "50px", textAlign: "right", backgroundColor:"rgb(82, 22, 123)", color: "white"}}>Bedacht door: {name}</Paper>
        </div>
    )
};

export function mapStateToProps(state: DisplayState): Props {
    return (state as PingSuggestionState).suggestion
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default styled(connect(mapStateToProps, mapDispatchToProps)(PingSuggestionC))({
    height: "calc(100% - 50px)",
    justifyContent: "center"
});
