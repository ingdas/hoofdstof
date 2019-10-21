import React, {useState} from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {activateQuestion, chartQuestion, NewTimer, openQuestion, roundIntro, showHint} from "./action/sendAction";
import {domeinen} from "../Config";
import {changeListener, isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

interface Props {
    domain?: number,
    r3SomAnswers: Record<string, number>
}

const R3SomC = ({domain, r3SomAnswers}: Props) => {
    const [echteSom, setEchteSom] = useState("0");
    let hintCount = 0;
    for (const ans of Object.keys(r3SomAnswers)) {
        if (Number(echteSom) * 0.95 <= Number(ans) && Number(ans) <= Number(echteSom) * 1.05) {
            hintCount += r3SomAnswers[ans]
        }
    }

    const vraagSom = () => {
        openQuestion("R3Som", "Wat is de som van alle getallen?", TextInputType.Number)
    };
    const vraagSom2 = () => {
        activateQuestion("R3Som")
        NewTimer(15);
    };
    const vraagPlek = () => {
        openQuestion("R3Plek", "Waar kan je nooit aan wetenschap doen?", TextInputType.Text);
        activateQuestion("R3Plek")
    };
    const zendHint = () => {
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[2], ["R3Som"], [String(Number(echteSom))])
        }
    };
    const toonResultaat = () => {
        chartQuestion("R3Som");
    };

    return (<div>
        <Button
            color="primary"
            onClick={() => roundIntro("3")}
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
                onClick={vraagPlek}
            >
                Vraag Plek
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector questionId="R3Plek"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button
                onClick={vraagSom}
            >
                Display Vraag Som
            </Button>
            <Button
                onClick={vraagSom2}
            >
                Vraag Som
            </Button>
            <TextField
                // className={clsx(classes.margin, classes.textField)}
                //style={{width = "100px"}}
                variant="outlined"
                label="Juiste Antwoord"
                onChange={changeListener(setEchteSom)}
                value={echteSom}
            ></TextField>
            <Button
                onClick={toonResultaat}
            >
                Toon Resultaat
            </Button>

            <Button
                onClick={zendHint}
                disabled={!isDefined(domain)}
            >
                Zend Hint ({hintCount})
            </Button>
        </ButtonGroup>
        <SuggestieSelector questionId="R3Som"/>
        <br></br>
    </div>)
};


function mapStateToProps(state: AdminState): Props {
    return {domain: state.domain, r3SomAnswers: state.answers["R3Som"] || {}}
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R3Som = connect(mapStateToProps, mapDispatchToProps)(R3SomC);
