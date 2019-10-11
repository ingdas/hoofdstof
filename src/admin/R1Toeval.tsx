import React, {useState} from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import {domeinen, uitvindingen} from "../Config";
import {chartQuestion, multipleChoiceQuestion, roundIntro, showHint} from "./action/sendAction";
import {connect} from "react-redux";
import {AdminState} from "./redux/adminState";
import SuggestieSelector from "./components/SuggestieSelector";
import {changeListener, isDefined} from "../util";
import TextField from "@material-ui/core/TextField";

export const R1ToevalC = ({domain}: { domain?: number }) => {

    const [manier1, setManier1] = useState("Manier 1");
    const [manier2, setManier2] = useState("Manier 2");

    const antwoorden = [manier1, manier2];

    const vraagUitvinding = () => {
        multipleChoiceQuestion("R1Uitvinding", "Wat moet er in dit fragment ontdekt worden?", uitvindingen)
    };
    const toonUitvinding = () => {
        chartQuestion("R1Uitvinding");
    };
    const quizVraag = () => {
        multipleChoiceQuestion("R1Quizvraag", "Welk verhaal is waar?", antwoorden)
    };
    const zendHint = (antwoord: number) => () => {
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[0], ["R1Quizvraag"], [antwoorden[antwoord]])
        }
    };
    const toonResultaat = () => {
        chartQuestion("R1Quizvraag");
    };


    return (<div>
            <Button
                color="primary"
                onClick={() => roundIntro( "Ronde 1: Da's toevallig")}
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
                    onClick={vraagUitvinding}
                >
                    Vraag Uitvinding
                </Button>

                <Button
                    color="primary"
                    onClick={toonUitvinding}
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
                    onClick={toonResultaat}
                >
                    Toon Resultaat
                </Button>
                <TextField
                    // className={clsx(classes.margin, classes.textField)}
                    //style={{width = "100px"}}
                    label="Manier 1"
                    value={manier1}
                    onChange={changeListener(setManier1)}
                ></TextField>
                <TextField
                    // className={clsx(classes.margin, classes.textField)}
                    //style={{width = "100px"}}
                    label="Manier 2"
                    value={manier2}
                    onChange={changeListener(setManier2)}
                ></TextField>
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
