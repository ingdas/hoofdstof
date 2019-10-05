import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {TextInputType} from "../redux/interfaces/question";
import {AdminState} from "../redux/interfaces/adminState";
import {connect} from "react-redux";
import {multipleChoiceQuestion, openQuestion, showHint} from "./action/sendAction";
import {domeinen} from "../Config";

export const R4GoogleC = ({domain}: AdminState) => {

    let currentId = 1;
    let questions: Array<string> = [];
    let answers: Array<number> = [];


    const vraagOntspanning = () => {
        openQuestion("R4Ontspanning", "Wat doet een wetenschapper om te ontspannen?", TextInputType.Text)
    };
    const stelVraag0 = () => {
        const questionId = `R4GoogleN${currentId++}`;
        questions.push(questionId);
        answers.push(0);
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", ["De eerste", "De tweede"], 0);
    };
    const stelVraag1 = () => {
        const questionId = `R4GoogleN${currentId++}`;
        questions.push(questionId);
        answers.push(1);
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", ["De eerste", "De tweede"], 1);
    };

    const zendHint = () => {
        if (domain !== undefined && domain !== null) {
            showHint(domeinen[domain].hints[3], questions, answers)
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
                onClick={vraagOntspanning}
            >
                Vraag Ontspanning
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector/>
        <ATimer time="50"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button
                onClick={stelVraag0}
            >
                De Eerste Vraag
            </Button>
            <Button
                onClick={stelVraag1}
            >
                De Tweede Vraag
            </Button>
            <Button
                //onClick={handleStart}
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
        <ATimer time="15"/>
    </div>)
};


function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R4Google = connect(mapStateToProps, mapDispatchToProps)(R4GoogleC);
