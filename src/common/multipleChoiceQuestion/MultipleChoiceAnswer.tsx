import React, {MouseEventHandler} from "react";
import Typography from "@material-ui/core/Typography";
import "./MultipleChoiceAnswer.css"
import Paper from "@material-ui/core/Paper";
import {answerQuestion} from "../../player/playerActions";
import {isDefined, vibrate} from "../../util";


interface AnswerProps {
    questionId: string
    dispatch: any;
    playerAnswer?: string;
    answer: string;
    image?: string;
}

export default ({questionId, dispatch, playerAnswer, answer, image}: AnswerProps) => {
    const active = !isDefined(playerAnswer);
    const selected = playerAnswer === answer;

    const onClick = (() => {
        if (active) {
            vibrate([100]);
            dispatch(answerQuestion(questionId, answer));
        }
    }) as MouseEventHandler;
    const color = selected ? "orange" : "rgb(82, 22, 123)";

    if (isDefined(image)) {
        return (
            <div onClick={onClick} className="card" style={{
                width: "70%",
                margin: "10px",
                backgroundColor: color,
                display: "flex",
                flexDirection: "row"
            }}>
                <div style={{marginRight: "20px"}}>
                    <img alt={answer} src={image} style={{height: "15vh"}}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Typography variant="h5" component="h2"
                                style={{textAlign: "center", color: "white", fontSize: "35px", marginTop: "-5px"}}>
                        {answer}
                    </Typography>
                </div>
            </div>
        );
    }

    return (
        <Paper onClick={onClick} className="card" style={{width: "70%", margin: "10px", backgroundColor: color}}>
            <Typography variant="h5" component="h2" style={{textAlign: "center", color: "white", fontSize: "35px"}}>
                {answer}
            </Typography>
        </Paper>
    );
};
