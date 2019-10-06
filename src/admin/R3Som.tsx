import React, {useState} from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {chartQuestion, openQuestion, showHint} from "./action/sendAction";
import {domeinen} from "../Config";
import {changeListener, isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

const R3SomC = (adminState: AdminState) => {
    const [echteSom, setEchteSom] = useState("0");

    const vraagSom = () => {
        openQuestion("R3Som", "Geef ons de som", TextInputType.Number)
    };
    const vraagPlek = () => {
        openQuestion("R3Plek", "Geef ons een plaats zonder wetenschap", TextInputType.Text)
    };
    const zendHint = () => {
        const domain = adminState.domain;
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[2], ["R3Som"], [String(Number(echteSom))])
        }
    };
    const toonResultaat = () => {
        chartQuestion("R3Som");
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
                onClick={vraagPlek}
            >
                Vraag Plek
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector questionId="R3Plek"/>
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button
                onClick={vraagSom}
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
            >
                Zend Hint
            </Button>
        </ButtonGroup>
        <br></br>
        <ATimer time="30"/>
    </div>)
};


function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R3Som = connect(mapStateToProps, mapDispatchToProps)(R3SomC);
