import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import {webSocket} from "../index";
import {uitvindingen} from "../Config";
import {multipleChoiceScreen} from "../redux/playerActions";

export const R1Toeval = () => {
    const vraagUitvinding = () => {
        webSocket.send(JSON.stringify(multipleChoiceScreen("Van welke uitvinding wil jij weten hoet het uitgevonden is?", uitvindingen)))
    };
    const quizVraag = () => {
        webSocket.send(JSON.stringify(multipleChoiceScreen("Hoe is de uitvinding echt uitgevonden?", ["Manier 1", "Manier 2"])))
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
                    onClick={vraagUitvinding}
                >
                    Vraag Uitvinding
                </Button>

                <Button
                    color="primary"
                    //onClick={handleStop}
                >
                    Toon resultaat
                </Button>
            </ButtonGroup>
            <br></br>
            <ATimer time="30"/>
            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop: "20px", marginBottom: "20px"}}
            >
                <Button
                    onClick={quizVraag}
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