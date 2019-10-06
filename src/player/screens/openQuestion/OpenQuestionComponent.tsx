import React, {FormEvent, MouseEventHandler, useState} from "react";
import {connect} from "react-redux";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./OpenQuestionComponent.css"
import {answerQuestion} from "../../playerActions";
import {OpenQuestion, TextInputType} from "../../interfaces/question";
import {AppState} from "../../interfaces/appState";
import {PlayerPosingQuestion} from "../../interfaces/playerState";

interface Props {
    type: TextInputType
    question: string
    done: boolean
    dispatch: any
    questionId: string
    initialAnswer : string
}

const TextInputC = ({initialAnswer, questionId, question, type, done, dispatch}: Props) => {

    let [answer, setAnswer] = useState(initialAnswer);

    const onClick = (() => {
        dispatch(answerQuestion(questionId, answer))
    }) as MouseEventHandler;

    const onChange = function (evt: FormEvent) {
        // @ts-ignore
        const value: string = evt.target.value;
        if (type === TextInputType.Number) {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                setAnswer(value)
            }
        } else {
            setAnswer(value)
        }
    };
    return (
        <div style={{"backgroundColor": "white"}}>
            <div className="qTitle">{question}</div>
            <div style={{"padding": "10px", "backgroundColor": "white"}}>
                <TextField
                    style={{}}
                    label="Antwoord"
                    value={answer}
                    onChange={done ? (() => {
                    }) : onChange}
                />
            </div>
            {!done && <Button
                style={{"margin": "20px"}}
                variant="contained"
                color="primary"
                onClick={onClick}
            >
                Send
                <Icon>send</Icon>
            </Button>}
        </div>)
};

function mapStateToProps(state: AppState) {
    const questionInfo = ((state.playerState as PlayerPosingQuestion).question as OpenQuestion);
    const currentAnswer = state.player.answers[questionInfo.id];
    return {
        question: questionInfo.question,
        type: questionInfo.textInputType,
        done: currentAnswer !== undefined,
        questionId: questionInfo.id,
        initialAnswer : currentAnswer || ""
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputC);
