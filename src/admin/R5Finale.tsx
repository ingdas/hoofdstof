import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {domeinen} from "../Config";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {chartQuestion, multipleChoiceQuestion} from "./action/sendAction";
import {isDefined} from "../util";

export const R5FinaleC = (adminState: AdminState) => {
    const startQuiz = () => {
        const domain = adminState.domain;
        if (isDefined(domain)) {
            let kandidaten = domeinen[domain].concurrenten.slice();
            kandidaten.push(domeinen[domain].wetenschapper);
            multipleChoiceQuestion("R5Finale", "Welke wetenschapper zoeken we?", kandidaten, domeinen[domain].afbeeldingen)
        }
    };

    const toonResultaat = () => {
        chartQuestion("R5Finale");
    };

    return (<div>
            <WachtBtn/>
            <br></br>
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
                    Start Quiz
                </Button>
                <Button
                    onClick={toonResultaat}
                >
                    Toon Resultaat
                </Button>
            </ButtonGroup>
            <br></br>
            <ATimer time="30"/>
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
