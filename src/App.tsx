import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {WindowName} from "./redux/states";
import {Question} from "./question/QuestionC";
import {WaitScreen} from "./waiting/WaitScreen";
import {connect} from "react-redux";
import WordCloud from "./text/WordCloud";
import TextInput from "./text/TextInput";
import ChartQuestion from "./question/ChartQuestion";
import Login from "./waiting/Login";
import {AdminScreen} from "./admin/Admin";
import {AppState} from "./redux/appstate";
import 'react-circular-progressbar/dist/styles.css';
import ProgressReporter from "./progress/ProgressReporter";

interface Props {
    windowName: WindowName
}

const App = ({windowName}: Props) => {
    const bumperStyle = {
    };

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
        case WindowName.Admin:
            appWindow = <AdminScreen/>;
            break;
    }

    return (<Container className="fullHeight" maxWidth="md">
        <div style={bumperStyle}>
            <ProgressReporter/>
        </div>
        {appWindow}
    </Container>);

};

export function mapStateToProps({window}: AppState): Props {
    return {windowName: window.windowName}
}

export default connect(mapStateToProps)(App)
