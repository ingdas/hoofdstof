import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import {domeinen, uitvindingen} from "../Config";
import {multipleChoiceQuestion, showHint} from "./action/sendAction";
import {connect} from "react-redux";
import {AdminState} from "../redux/interfaces/adminState";
import SuggestieSelector from "./components/SuggestieSelector";

export const R1ToevalC = ({domain}: { domain?: number }) => {
    const vraagUitvinding = () => {
        multipleChoiceQuestion("R1Uitvinding", "Van welke uitvinding wil jij weten hoet het uitgevonden is?", uitvindingen)
    };
    const quizVraag = () => {
        multipleChoiceQuestion("R1Quizvraag", "Hoe is de uitvinding echt uitgevonden?", ["Manier 1", "Manier 2"])
    };
    const zendHint = (antwoord: number) => () => {
        if (domain !== undefined) {
            showHint(domeinen[domain].hints[0], ["R1Quizvraag"], [antwoord])
        }
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
            <SuggestieSelector questionId="R1Uitvinding"/>

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
                <Button
                    //onClick={handleStart}
                >
                    Toon Resultaat
                </Button>
                <Button
                    onClick={zendHint(0)}
                >
                    Hint Juiste Antwoord 1
                </Button>
                <Button
                    onClick={zendHint(1)}
                >
                    Hint Juiste Antwoord 2
                </Button>
            </ButtonGroup>
        <SuggestieSelector questionId="R1Quizvraag"/>
            <br></br>
            <ATimer time="30"/>
        </div>
    )
};


function mapStateToProps(state: AdminState): { domain?: number } {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R1Toeval = connect(mapStateToProps, mapDispatchToProps)(R1ToevalC);
