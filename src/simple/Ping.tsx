import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {AppState} from "../redux/interfaces/appState";
import {PingHint} from "../redux/interfaces/playerState";

interface Props {
    notification: string,
}

const PingC = ({notification}: Props) => {
    return (
        <Paper style={{fontSize : "64px"}}>{notification}</Paper>
    )
};

export function mapStateToProps(state: AppState): Props {
    const {notification} = state.playerState as PingHint;
    console.log(notification);
    return {notification}
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export const Ping = connect(mapStateToProps, mapDispatchToProps)(PingC);