import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {chartQuestion, multipleChoiceQuestion, openQuestion, roundIntro, showHint} from "./action/sendAction";
import {domeinen, faalAntwoorden, faalJuistAntwoord, faalVraag} from "../Config";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import SuggestieSelector from "./components/SuggestieSelector";
import {isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

const R2FaalC = ({domain}: { domain?: number }) => {

    const vraagEmotie = () => {
        openQuestion("R2Emotie", "Geef ons een emotie", TextInputType.Text)
    };

    const startQuiz = () => {
        multipleChoiceQuestion("R2Quiz", faalVraag, faalAntwoorden)
    };

    const zendHint = () => {
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[1], ["R2Quiz"], [faalAntwoorden[faalJuistAntwoord]])
        }
    };

    const toonResultaat = () => {
        chartQuestion("R2Quiz");
    };

    return (<div>
        <Button
            color="primary"
            onClick={() => roundIntro( "Ronde 2: Faalangst")}
        >Ronde Intro</Button>
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
        <SuggestieSelector questionId="R2Emotie"/>
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button onClick={startQuiz}>Start Quiz</Button>
            <Button
                onClick={toonResultaat}
            >
                Toon Resultaat
            </Button>

            <Button
                onClick={zendHint}
            >
                Zend Hint
            </Button>
        </ButtonGroup>
        <SuggestieSelector questionId="R2Quiz"/>

        <br></br>
        <ATimer time="30"/>
    </div>)
};


function mapStateToProps(state: AdminState): { domain?: number } {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R2Faal = connect(mapStateToProps, mapDispatchToProps)(R2FaalC);
