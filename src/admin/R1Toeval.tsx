import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";

export const R1Toeval = () => {
    return (<div>
            <WachtBtn/>

            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop : "20px", marginBottom : "20px"}}
            >
                <Button
                    color="primary"
                    //onClick={handleStart}
                >
                    Start Vraag
                </Button>

                <Button
                    color="primary"
                    //onClick={handleStop}
                >
                    Toon resultaat
                </Button>
            </ButtonGroup>
            <br></br>
            <TextField
                // className={clsx(classes.margin, classes.textField)}
                //style={{width = "100px"}}
                multiline
                variant="outlined"
                label="(Toevallige) Uitvindingen"
                // onChange={handleChange('weightRange')}
                value={"Cornflakes\nPost-its\nChips\nPacemaker\Velcro"}
            ></TextField>
            <ATimer time="30"/>
            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop : "20px", marginBottom : "20px"}}
            >
                <Button
                    //onClick={handleStop}
                >
                    Start Quiz
                </Button>
                <TextField
                    // className={clsx(classes.margin, classes.textField)}
                    //style={{width = "100px"}}
                    variant="outlined"
                    label="Juiste Antwoord"
                    // onChange={handleChange('weightRange')}
                    value={"1"}
                ></TextField>
                <Button
                    //onClick={handleStart}
                >
                    Toon Resultaat
                </Button>

                <Button
                    //onClick={handleStop}
                >
                    Zend Hint
                </Button>
            </ButtonGroup>
            <br></br>
            <ATimer time="30"/>
        </div>
    )
};