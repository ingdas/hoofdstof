import React, {useState} from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {ATimer} from "./components/ATimer";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {multipleChoiceQuestion, openQuestion, showHint} from "./action/sendAction";
import {domeinen} from "../Config";
import {isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

export const R4GoogleC = ({domain}: AdminState) => {

    let currentId = 1;
    const [questions, setQuestions] = useState([] as Array<string>);
    const [answers, setAnswers] = useState([] as Array<string>);

    const answerOptions = ["De eerste", "De tweede"];
    const vraagOntspanning = () => {
        openQuestion("R4Ontspanning", "Wat doet een wetenschapper om te ontspannen?", TextInputType.Text)
    };
    const stelVraag0 = () => {
        const questionId = `R4GoogleN${currentId++}`;
        setQuestions(questions.concat(questionId));
        setAnswers(answers.concat(answerOptions[0]));
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", answerOptions);
    };
    const stelVraag1 = () => {
        const questionId = `R4GoogleN${currentId++}`;
        setQuestions(questions.concat(questionId));
        setAnswers(answers.concat(answerOptions[1]));
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", answerOptions);
    };

    const zendHint = () => {
        if (isDefined(domain)) {
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
        <SuggestieSelector questionId="R4Ontspanning"/>
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
