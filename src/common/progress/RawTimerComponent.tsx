import React, {useEffect, useState} from 'react';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import './RawTimerComponent.css';
import {TimerState} from "../timerState";
import {isDefined, vibrate} from "../../util";


export default ({className, timeLeft, totalTime, startTime}: TimerState & { className?: string }) => {
    const [seconds, setSeconds] = useState(timeLeft);
    const [started, setStarted] = useState(0);
    const [origTimeLeft, setOrigTimeLeft] = useState(0);

    useEffect(() => {
        let interval: any = null;
        if (started !== startTime || origTimeLeft !== timeLeft) {
            setSeconds(timeLeft);
            setStarted(startTime);
            setOrigTimeLeft(timeLeft);
        }
        if (seconds >= 0) {
            if (seconds === 0) {
                vibrate([300])
            } else if (seconds <= 3) {
                vibrate([100])
            }

            interval = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timeLeft, seconds, started, startTime, origTimeLeft]);

    if (!isDefined(seconds) || seconds < 0) {
        return <div></div>
    }
    return (
        <CircularProgressbar
            className={className}
            value={totalTime - seconds}
            maxValue={totalTime}
            text={"" + seconds}
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
    );
};
