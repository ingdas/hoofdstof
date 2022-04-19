import React, {useState} from "react";
import {WachtBtn} from "./components/WachtBtn";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import {
    activateQuestion,
    multipleChoiceQuestion,
    openQuestion,
    roundIntro,
    showHint,
    waitScreenDisplay,
    waitScreenPlayer
} from "./action/sendAction";
import {domeinen} from "../Config";
import {isDefined} from "../util";
import {TextInputType} from "../player/interfaces/question";

export const R4FakeNewsC = ({domain}: AdminState) => {

    const [currentId, setCurrentId] = useState(1);
    const [questions, setQuestions] = useState([] as Array<string>);
    const [answers, setAnswers] = useState([] as Array<string>);

    const answerOptions = ["A", "B"];
    const vraagJongerentaal = () => {
        openQuestion("R4Ontspanning", "Welk woord gebruik jij,\n maar je ouders niet?", TextInputType.Text);
        activateQuestion("R4Ontspanning");
    };
    const stelVraag0 = () => {
        const questionId = `R4GoogleAN${currentId}`;
        setQuestions(questions.concat(questionId));
        setAnswers(answers.concat(answerOptions[0]));
        setCurrentId(currentId + 1);
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", answerOptions);
        activateQuestion(questionId);
    };
    const stelVraag1 = () => {
        const questionId = `R4GoogleBN${currentId}`;
        setQuestions(questions.concat(questionId));
        setAnswers(answers.concat(answerOptions[1]));
        setCurrentId(currentId + 1);
        multipleChoiceQuestion(questionId, "Welke uitspraak is correct?", answerOptions);
        activateQuestion(questionId);
    };

    const zendHint = () => {
        if (isDefined(domain)) {
            showHint(domeinen[domain].hints[3], questions, answers)
        }
    };

    return (<div>
        <Button
            color="primary"
            onClick={() => roundIntro( "4")}
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
                onClick={vraagJongerentaal}
            >
                Vraag Jongerentaal
            </Button>

        </ButtonGroup>
        <br></br>
        <SuggestieSelector questionId="R4Ontspanning"/>


        <ButtonGroup
            color="secondary"
            size="large"
            aria-label="large outlined secondary button group"
            style={{marginTop: "20px", marginBottom: "20px"}}
        >
            <Button onClick={(evt) => {waitScreenDisplay() ; waitScreenPlayer()}}>
                Wacht
            </Button>
            <Button
                onClick={stelVraag0}
            >
                Antwoord A
            </Button>
            <Button
                onClick={stelVraag1}
            >
                Antwoord B
            </Button>

            <Button
                onClick={zendHint}
            >
                Zend Hint
            </Button>
        </ButtonGroup>
        {
            questions.map((q) => <SuggestieSelector questionId={q}/>)
        }
    </div>)
};


function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R4FakeNews = connect(mapStateToProps, mapDispatchToProps)(R4FakeNewsC);
