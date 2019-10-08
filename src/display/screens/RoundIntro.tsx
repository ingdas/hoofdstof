import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {DisplayState, RoundIntroState} from "../redux/displayState";


interface Props {
    name: string
}

const RoundIntroC = ({name}: Props) => {
    return (
        <div>
            <Paper style={{fontSize: "64px"}}>{name}</Paper>
        </div>
    )
};

export function mapStateToProps(state: DisplayState): Props {
    return (state as RoundIntroState)
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundIntroC);