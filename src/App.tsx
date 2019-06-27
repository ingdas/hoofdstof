import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {AppState, WindowName} from "./redux/states";
import {Question} from "./question/QuestionC";
import {WaitScreen} from "./waiting/WaitScreen";
import {connect} from "react-redux";
import ChartQuestion from "./chartQuestion/ChartQuestion";

interface Props {
    window: WindowName
}

const App = ({window}: Props) => {
    const bumperStyle = {
        height: "50px"
    };

    let appWindow;
    switch (window) {
        case WindowName.AnswerQuestion:
            appWindow = <Question/>;
            break;
        case WindowName.ChartQuestion:
            appWindow = <ChartQuestion/>;
            break;
        default:
            appWindow = <WaitScreen/>;
            break;
    }

    return (<Container maxWidth="md">
        <div style={bumperStyle}/>
        {appWindow}
    </Container>);

};

export function mapStateToProps({window}: AppState): Props {
    return {window}
}

export default connect(mapStateToProps)(App)
