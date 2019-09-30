import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {webSocket} from "../index";
import {multipleChoiceScreen, textInputScreen} from "../redux/playerActions";
import {faalAntwoorden, faalVraag} from "../Config";
import {TextInputType} from "../redux/interfaces/question";

export const R2Faal = () => {

    const vraagEmotie = () => {
        webSocket.send(JSON.stringify(textInputScreen("Geef ons een emotie", TextInputType.Text)))
    };

    const startQuiz = () => {
        webSocket.send(JSON.stringify(multipleChoiceScreen(faalVraag, faalAntwoorden)))
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
                onClick={vraagEmotie}
            >
                Vraag Emoties
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
            <Button onClick={startQuiz}>Start Quiz</Button>
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