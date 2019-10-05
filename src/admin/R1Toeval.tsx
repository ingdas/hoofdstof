import React, {useState} from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import {uitvindingen} from "../Config";
import {multipleChoiceQuestion, showHint} from "./action/sendAction";
import {changeListener} from "../util";

export const R1Toeval = () => {
    const [antwoord, setAntwoord]= useState("1");


    const vraagUitvinding = () => {
        multipleChoiceQuestion("R1Uitvinding","Van welke uitvinding wil jij weten hoet het uitgevonden is?", uitvindingen)
    };
    const quizVraag = () => {
        multipleChoiceQuestion("R1Quizvraag","Hoe is de uitvinding echt uitgevonden?", ["Manier 1", "Manier 2"])
    };
    const zendHint = () => {
        showHint("TODO", "R1Quizvraag", Number(antwoord))
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
                    onChange={changeListener(setAntwoord)}
                    value={antwoord}
                ></TextField>
                <Button
                    //onClick={handleStart}
                >
                    Toon Resultaat
                </Button>

                <Button
                    onClick={zendHint}
                >
                    Zend Hint
                </Button>
            </ButtonGroup>
            <br></br>
            <ATimer time="30"/>
        </div>
    )
};