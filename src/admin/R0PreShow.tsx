import React from "react";
import {ATimer} from "./components/ATimer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ButtonGroup} from "@material-ui/core";
import {WachtBtn} from "./components/WachtBtn";

export const R0PreShow = () => {
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
                    Openingsscherm
                </Button>

                <Button
                    color="primary"
                    //onClick={handleStop}
                >
                    Uitloggen
                </Button>
            </ButtonGroup>
            <br></br>
            <TextField
             // className={clsx(classes.margin, classes.textField)}
                //style={{width = "100px"}}
                multiline
                variant="outlined"
                label="Beroepen"
                // onChange={handleChange('weightRange')}
                value={"Wiskundige\nChemicus\nImprovisatie-acteur"}
            ></TextField>
            <ATimer time="60"/>
        </div>
    )
};