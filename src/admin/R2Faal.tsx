import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {webSocket} from "../index";
import {multipleChoiceScreen, textInputScreen} from "../redux/actions";
import {TextInputType} from "../redux/states";
import {domeinen} from "../Config";
import {start} from "repl";

export const R2Faal = () => {

    const vraagEmotie = () => {
        webSocket.send(JSON.stringify(textInputScreen("Geef ons een emotie", TextInputType.Text)))
    };

    const startQuiz = () => {
        webSocket.send(JSON.stringify(multipleChoiceScreen(domeinen[0].faalVraag, domeinen[0].faalAntwoorden)))
    };

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
                onClick={vraagEmotie}
            >
                Vraag Emoties
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector />
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop : "20px", marginBottom : "20px"}}
        >
            <Button onClick={startQuiz}>Start Quiz</Button>
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
    </div>)
};