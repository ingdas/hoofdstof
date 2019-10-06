import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {WaitScreen} from "./player/screens/WaitScreen";
import {connect} from "react-redux";
import WordCloud from "./display/screens/WordCloud";
import TextInput from "./player/screens/openQuestion/OpenQuestionComponent";
import ChartQuestion from "./display/screens/ChartQuestion";
import Login from "./player/screens/Login";

import 'react-circular-progressbar/dist/styles.css';
import ProgressReporter from "./common/progress/ProgressReporter";
import Opening from "./player/screens/Opening";
import {ShowHint} from "./player/screens/ShowHint";
import {AppLocation, Loc} from "./index";
import AdminScreen from "./admin/Admin";
import {WindowName} from "./player/interfaces/windowName";
import {Question} from "./player/screens/multipleChoiceQuestion/QuestionC";
import {AppState} from "./player/interfaces/appState";

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
