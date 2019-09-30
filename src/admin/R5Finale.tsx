import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {webSocket} from "../index";
import {multipleChoiceScreen} from "../redux/playerActions";
import {domeinen} from "../Config";

export const R5Finale = () => {
    const startQuiz = () => {
        let kandidaten = domeinen[0].concurrenten;
        kandidaten.push(domeinen[0].wetenschapper);
        webSocket.send(JSON.stringify(multipleChoiceScreen("Welke wetenschapper zoeken we?", kandidaten)))
    };

    return (<div>
            <WachtBtn/>
            <br></br>
            <SuggestieSelector/>
            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop : "20px", marginBottom : "20px"}}
            >
                <Button
                    onClick={startQuiz}
                >
                    Start Quiz
                </Button>
                <Button
                    //onClick={handleStart}
                >
                    Toon Resultaat
                </Button>
            </ButtonGroup>
            <br></br>
            <ATimer time="30"/>
        </div>
    )
};