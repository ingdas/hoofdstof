import React from 'react';
import './PlayerRoot.css';
import {Container} from "@material-ui/core";
import {connect} from "react-redux";

import 'react-circular-progressbar/dist/styles.css';
import {WindowName} from "./interfaces/windowName";
import ChartQuestion from "../display/screens/ChartQuestion";
import Opening from "./screens/Opening";
import {ShowHint} from "./screens/ShowHint";
import WordCloud from "../display/screens/WordCloud";
import Login from "./screens/Login";
import {AppState} from "./interfaces/appState";
import {WaitScreen} from "./screens/WaitScreen";
import OpenQuestionComponent from "./screens/openQuestion/OpenQuestionComponent";
import PlayerTimer from "./screens/PlayerTimer";
import PlayerMultipleChoiceQuestion from "./screens/PlayerMultipleChoiceQuestion";


interface Props {
    windowName: WindowName
}

const PlayerRoot = ({windowName}: Props) => {
    const bumperStyle = {
        height: "50px"
    };
    let appWindow;
    switch (windowName) {
        case WindowName.AnswerQuestion:
            appWindow = <PlayerMultipleChoiceQuestion/>;
            break;
        case WindowName.ChartQuestion:
            appWindow = <ChartQuestion/>;
            break;
        case WindowName.TextInput:
            appWindow = <OpenQuestionComponent/>;
            break;
        case WindowName.WordCloud:
            appWindow = <WordCloud/>;
            break;
        case WindowName.WaitScreen:
            appWindow = <WaitScreen/>;
            break;
        case WindowName.Login:
            appWindow = <Login/>;
            break;
        case WindowName.Opening:
            appWindow = <Opening/>;
            break;
        case WindowName.Ping:
            appWindow = <ShowHint/>;
    }

    return (<Container className="fullHeight" maxWidth="md">
        <div style={bumperStyle}>
        </div>
        <PlayerTimer/>
        {appWindow}
    </Container>);

};

export function mapStateToProps(appState: AppState): Props {
    return {windowName: appState.playerState.windowName}
}

export default connect(mapStateToProps)(PlayerRoot)
