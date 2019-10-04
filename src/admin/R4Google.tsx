import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {webSocket} from "../index";
import {textInputScreen} from "../redux/playerActions";
import {TextInputType} from "../redux/interfaces/question";

export const R4Google = () => {
    const vraagOntspanning = () => {
        webSocket.send(JSON.stringify(textInputScreen("Wat doet een wetenschapper om te ontspannen?", TextInputType.Text)))
    };
    const stelVraag0 = () => {
        //webSocket.send(JSON.stringify(multipleChoiceQuestion("Welke stelling klopt?", ["A", "B"])))
    };
    const stelVraag1 = () => {
        //webSocket.send(JSON.stringify(multipleChoiceQuestion("Welke stelling klopt?", ["A", "B"])))
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
                onClick={vraagOntspanning}
            >
                Vraag Ontspanning
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
            <Button
                onClick={stelVraag0}
            >
                Stel Onware Vraag
            </Button>
            <Button
                onClick={stelVraag1}
            >
                Stel Ware Vraag
            </Button>
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
        <ATimer time="15"/>
    </div>)
};