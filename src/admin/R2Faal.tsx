import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
    activateQuestion,
    multipleChoiceQuestion,
    NewTimer,
    openQuestion,
    roundIntro,
    showHint
} from "./action/sendAction";
import {domeinen, faalAntwoorden, faalJuistAntwoord, faalVraag} from "../Config";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import SuggestieSelector from "./components/SuggestieSelector";
import {isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

const R2FaalC = ({domain}: { domain?: number }) => {

    const vraagEmotie = () => {
        openQuestion("R2Emotie", "Welke emotie wil je graag zien\nbij het falen van de wetenschapper?", TextInputType.Text)
        activateQuestion("R2Emotie")
    };

    const startQuiz = () => {
        multipleChoiceQuestion("R2Quiz", faalVraag, faalAntwoorden)
    };
    const startQuiz2 = () => {
        activateQuestion("R2Quiz");
        NewTimer(15);
    };

    const zendHint = () => {
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[1], ["R2Quiz"], [faalAntwoorden[faalJuistAntwoord]])
        }
    };

    return (<div>
        <Button
            color="primary"
            onClick={() => roundIntro( "2")}
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


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button onClick={startQuiz}>Display Quiz</Button>
            <Button onClick={startQuiz2}>Start Quiz</Button>
            <Button
                onClick={zendHint}
            >
                Zend Hint
            </Button>
        </ButtonGroup>
        <SuggestieSelector questionId="R2Quiz"/>

    </div>)
};



function mapStateToProps(state: AdminState): { domain?: number } {
    return {domain: state.domain}
}


function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R2Faal = connect(mapStateToProps, mapDispatchToProps)(R2FaalC);
