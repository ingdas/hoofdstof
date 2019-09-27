import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {webSocket} from "../index";
import {textInputScreen} from "../redux/actions";
import {TextInputType} from "../redux/states";

export const R3Som = () => {

    const vraagSom = () => {
        webSocket.send(JSON.stringify(textInputScreen("Geef ons de som", TextInputType.Number)))
    };
    const vraagPlek = () => {
        webSocket.send(JSON.stringify(textInputScreen("Geef ons een plaats zonder wetenschap", TextInputType.Text)))
    };

    return (<div>
        <WachtBtn/>

        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button
                color="primary"
                onClick={vraagPlek}
            >
                Vraag Plek
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector/>
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button
                onClick={vraagSom}
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