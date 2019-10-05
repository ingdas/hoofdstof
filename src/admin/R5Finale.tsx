import React from "react";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {domeinen} from "../Config";
import {AdminState} from "../redux/interfaces/adminState";
import {connect} from "react-redux";
import {R4GoogleC} from "./R4Google";

export const R5FinaleC = () => {
    const startQuiz = () => {
        let kandidaten = domeinen[0].concurrenten;
        kandidaten.push(domeinen[0].wetenschapper);
        //webSocket.send(JSON.stringify(multipleChoiceQuestion("Welke wetenschapper zoeken we?", kandidaten)))
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

function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R5Finale = connect(mapStateToProps, mapDispatchToProps)(R5FinaleC);
