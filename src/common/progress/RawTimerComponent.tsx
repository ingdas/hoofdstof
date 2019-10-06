import React, {useEffect, useState} from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './RawTimerComponent.css';
import {TimerState} from "../timerState";
import {isDefined} from "../../util";

export default ({timeLeft, totalTime, startTime}: TimerState) => {
    const [seconds, setSeconds] = useState(timeLeft);
    const [started, setStarted] = useState(0);

    useEffect(() => {
        let interval: any = null;
        if (started !== startTime) {
            setSeconds(timeLeft);
            setStarted(startTime);
        }
        if (seconds >= 0) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timeLeft, seconds, started, startTime]);

    if (!isDefined(seconds) || seconds < 0) {
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
                value={totalTime - seconds}
                maxValue={totalTime}
                text={""+seconds}
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
