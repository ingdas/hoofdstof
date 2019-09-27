import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from '@material-ui/core';
import Icon from "@material-ui/core/Icon";
import {webSocket} from "../../index";
import TextField from "@material-ui/core/TextField";
import {newTimer} from "../../redux/actions";

export const ATimer = ({time} :{time : String}) => {

    let [seconds, setSeconds] = useState(time);

    const handleStart = () => {
        webSocket.send(JSON.stringify(newTimer(+seconds,+seconds)));
    };
    const handleStop = () => {
        webSocket.send(JSON.stringify(newTimer(-1,-1)));
    };

    return (
        <div style={{marginTop : "20px", marginBottom : "20px"}}>
            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
            >
                <TextField
                    // className={clsx(classes.margin, classes.textField)}
                    //style={{width = "100px"}}
                    variant="outlined"
                    label="Time"
                    value={seconds}
                    onChange={(event) => {
                        setSeconds(event.target.value)
                    }}
                ></TextField>
            <Button
                color="primary"
                onClick={handleStart}
            >
                Start
            </Button>
            <Button
                color="primary"
                onClick={handleStop}
            >
                Stop
            </Button>
            </ButtonGroup>
        </div>
    )
};