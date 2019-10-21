import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {domeinen} from "../Config";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {
    activateQuestion,
    chartQuestion,
    multipleChoiceQuestion,
    NewTimer,
    pingScreen,
    roundIntro, showImage
} from "./action/sendAction";
import {isDefined, shuffle} from "../util";

export const R5FinaleC = (adminState: AdminState) => {
    const domain = adminState.domain;

    const startQuiz = () => {
        if (isDefined(domain)) {

            let kandidaten = domeinen[domain].concurrenten.slice();
            kandidaten.push(domeinen[domain].wetenschapper);
            let afbeeldingen = domeinen[domain].afbeeldingen;

            const c = kandidaten.map(function (e, i) {
                return [e, afbeeldingen[i]];
            });
            shuffle(c);
            kandidaten = c.map((e) => e[0]);
            afbeeldingen = c.map((e) => e[1]);

            multipleChoiceQuestion("R5Finale", "Welke wetenschapper zoeken we?", kandidaten, afbeeldingen)
        }
    };

    const startQuiz2 = () => {
        activateQuestion("R5Finale");
        NewTimer(15);
    };

    const toonResultaat = () => {
        chartQuestion("R5Finale");
    };

    const toonAntwoord = () => {
        if(isDefined(domain)){
            showImage(domeinen[domain].afbeeldingen[domeinen[domain].afbeeldingen.length-1]);
        }
    };

    const showQuote = () => {
        if (isDefined(domain)) {
            pingScreen(domeinen[domain].quote, "???")
        }
    };

    return (<div>
            <Button
                color="primary"
                onClick={() => roundIntro("5")}
            >Ronde Intro</Button>
            <WachtBtn/>
            <br></br>
            <Button
                onClick={showQuote}
            >
                Originele Quote
            </Button>
            <SuggestieSelector questionId="R0Zin"/>
            <ButtonGroup
                color="secondary"
                size="large"
                aria-label="large outlined secondary button group"
                style={{marginTop: "20px", marginBottom: "20px"}}
            >
                <Button
                    onClick={startQuiz}
                >
                    Display Quiz
                </Button>
                <Button
                    onClick={startQuiz2}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={toonResultaat}
                >
                    Toon Resultaat
                </Button>
                <Button
                    onClick={toonAntwoord}
                >
                    Toon Antwoord
                </Button>
            </ButtonGroup>
            <SuggestieSelector questionId="R5Finale"/>
        </div>
    )
};

function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R5Finale = connect(mapStateToProps, mapDispatchToProps)(R5FinaleC);
