import React from 'react';
import {TimerState} from "../redux/states";
import {AppState} from "../redux/appstate";
import {connect} from "react-redux";
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const App = ({timeLeft, totalTime}: TimerState) => {

    if(timeLeft <= 0){
        return <div></div>
    }
    return <CircularProgressbar value={totalTime-timeLeft} maxValue={totalTime} text={timeLeft.toString()} />;
};

export function mapStateToProps({time}: AppState): TimerState {
    return time
}

export default connect(mapStateToProps)(App)
