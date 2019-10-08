import React from 'react';
import './DisplayRoot.css';
import {Container} from "@material-ui/core";
import {connect} from "react-redux";

import 'react-circular-progressbar/dist/styles.css';

import {DisplayState} from "./redux/displayState";
import {DisplayWaitScreen} from "./screens/DisplayWaitScreen";
import DisplayTimer from "./screens/DisplayTimer";
import {WindowName} from "../player/interfaces/windowName";
import PingSuggestion from "./screens/PingSuggestion";
import ChartQuestion from "./screens/ChartQuestion";
import DisplayMultipleChoiceQuestion from "./screens/DisplayMultipleChoiceQuestion";

interface Props {
    windowName: string
}

const DisplayRoot = ({windowName}: Props) => {
    const bumperStyle = {
        height: "50px"
    };
    let appWindow;
    switch (windowName) {
        case WindowName.ChartQuestion:
            appWindow = <ChartQuestion/>;
            break;
        case WindowName.Ping:
            appWindow = <PingSuggestion/>;
            break;
        case WindowName.AnswerQuestion:
            appWindow = <DisplayMultipleChoiceQuestion/>;
            break;
        case WindowName.WaitScreen:
        default: {
            appWindow = <DisplayWaitScreen/>;
            break;
        }
    }

    return (<Container className="fullHeight" maxWidth="md">
        <div style={bumperStyle}>
        </div>
        <DisplayTimer/>
        {appWindow}
    </Container>);

};

export function mapStateToProps(displayState: DisplayState): Props {
    return {windowName: displayState.windowName}
}

export default connect(mapStateToProps)(DisplayRoot)
