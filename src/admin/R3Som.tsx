import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";

export const R3Som = () => {
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
                Vraag Plek
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector />
        <ATimer time="50"/>

        <TextField
            // className={clsx(classes.margin, classes.textField)}
            //style={{width = "100px"}}
            multiline
            variant="outlined"
            label="Kennisvraag en antwoorden"
            // onChange={handleChange('weightRange')}
            value={"Wat is geel?\nEen rode roos\nEen blauwe roos\nEen paarse roos\nEen verwarde tomaat"}
        ></TextField>

        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop : "20px", marginBottom : "20px"}}
        >
            <Button
                //onClick={handleStop}
            >
                Vraag Som
            </Button>
            <TextField
                // className={clsx(classes.margin, classes.textField)}
                //style={{width = "100px"}}
                variant="outlined"
                label="Juiste Antwoord"
                // onChange={handleChange('weightRange')}
                value={"1648"}
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
    </div>)
};