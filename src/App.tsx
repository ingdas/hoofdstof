import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {Question} from "./question/QuestionC";
import {WaitScreen} from "./simple/WaitScreen";
import {connect} from "react-redux";
import WordCloud from "./text/WordCloud";
import TextInput from "./text/TextInput";
import ChartQuestion from "./question/ChartQuestion";
import Login from "./simple/Login";

import 'react-circular-progressbar/dist/styles.css';
import ProgressReporter from "./progress/ProgressReporter";
import Opening from "./simple/Opening";
import {ShowHint} from "./simple/ShowHint";
import {WindowName} from "./redux/interfaces/windowName";
import {AppState} from "./redux/interfaces/appState";
import {AppLocation, Loc} from "./index";
import AdminScreen from "./admin/Admin";

interface Props {
    windowName: WindowName
}

const App = ({windowName}: Props) => {
    const bumperStyle = {
        height: "50px"
    };
    if (AppLocation === Loc.ADMIN) {
        return <AdminScreen/>
    }

    let appWindow;
    switch (windowName) {
        case WindowName.AnswerQuestion:
            appWindow = <Question/>;
            break;
        case WindowName.ChartQuestion:
            appWindow = <ChartQuestion/>;
            break;
        case WindowName.TextInput:
            appWindow = <TextInput/>;
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
        <ProgressReporter/>
        {appWindow}
    </Container>);

};

export function mapStateToProps(appState: AppState): Props {
    if (AppLocation === Loc.ADMIN) {
        return {windowName: WindowName.Admin}
    }
    return {windowName: appState.playerState.windowName}
}

export default connect(mapStateToProps)(App)
