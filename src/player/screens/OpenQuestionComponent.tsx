import React, {FormEvent, MouseEventHandler, useState} from "react";
import {connect} from "react-redux";
import {Card, CardContent, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {answerQuestion} from "../playerActions";
import {OpenQuestion, TextInputType} from "../interfaces/question";
import {AppState} from "../interfaces/appState";
import {PlayerPosingQuestion} from "../interfaces/playerState";
import {vibrate} from "../../util";

interface Props {
    type: TextInputType
    question: string
    done: boolean
    dispatch: any
    questionId: string
    initialAnswer: string
}

const TextInputC = ({initialAnswer, questionId, question, type, done, dispatch}: Props) => {

    let [answer, setAnswer] = useState(initialAnswer);

    const onClick = (() => {
        vibrate([200]);
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
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center"
        }}>
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
            {question}
            </Typography>
            <TextField
                    style={{}}
                    label="Antwoord"
                    value={answer}
                    onChange={done ? (() => {
                    }) : onChange}
                    disabled={done}
                    inputProps={type === TextInputType.Number ? {
                        type: "number",
                        pattern: "[0-9]*",
                        inputMode: "numeric"
                    } : {}}
                />
            </CardContent>
        </Card>
                {!done && <Button
                    style={{"margin": "20px", width: "40vw"}}
                    variant="contained"
                    color="primary"
                    onClick={onClick}
                >
                    Verzenden
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
        initialAnswer: currentAnswer || ""
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputC);
