import React from "react";
import {Paper} from "@material-ui/core";
import {PingState} from "../redux/states";
import {connect} from "react-redux";
import {AppState} from "../redux/appstate";

interface Props {
    notification: string,
}

const PingC = ({notification}: Props) => {
    return (
        <Paper>{notification}</Paper>
    )
};

export function mapStateToProps(state: AppState): Props {
    console.log("THIS IS PING");
    const {notification} = state.window as PingState;
    console.log(notification);
    return {notification}
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export const Ping = connect(mapStateToProps, mapDispatchToProps)(PingC);