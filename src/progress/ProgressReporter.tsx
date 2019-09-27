import React from 'react';
import {TimerState} from "../redux/states";
import {AppState} from "../redux/appstate";
import {connect} from "react-redux";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './ProgressReporter.css';

const App = ({timeLeft, totalTime}: TimerState) => {

    if(timeLeft < 0){
        return <div></div>
    }
    return (
        <div style={{
            height: "100px",
            width: "100px",
            position: "absolute",
            cursor: "default",
            right: 0,
            margin: "10px"
        }}>
            <CircularProgressbar
                value={totalTime-timeLeft}
                maxValue={totalTime}
                text={timeLeft.toString()}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    textSize: '2.5em',
                    pathTransitionDuration: 1,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    backgroundColor: '#FFF',
                    textColor: '#28b674',
                    pathColor: '#28b674',
                    trailColor: 'transparent'
                })}
            />
        </div>);
};

export function mapStateToProps({time}: AppState): TimerState {
    const {timeLeft, totalTime, timeOutmarker} = time;
    return {timeLeft, totalTime, timeOutmarker}
}

export default connect(mapStateToProps)(App)
