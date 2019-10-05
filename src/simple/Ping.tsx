import React from "react";
import {Paper} from "@material-ui/core";
import {connect} from "react-redux";
import {AppState} from "../redux/interfaces/appState";
import {PlayerHint} from "../redux/interfaces/playerState";

interface Props {
    hint: string
    isRight: boolean
}

const PingC = ({hint, isRight}: Props) => {
    if (isRight) {
        return (
            <Paper style={{fontSize: "64px"}}>Onthoud deze hint voor de finale: {hint}</Paper>
        )
    } else {
        return <Paper style={{fontSize: "64px"}}>Helaas, je hebt de vraag fout beantwoord</Paper>
    }
};

export function mapStateToProps(state: AppState): Props {
    const hint = (state.playerState as unknown as { hint: PlayerHint }).hint;

    let rightquestions = 0;

    for (let i = 0; i < hint.questionIds.length; i++) {
        const playerAnswer = state.player.answers[hint.questionIds[i]];
        console.log(hint, playerAnswer);
        if (playerAnswer === hint.rightAnswers[i]) {
            rightquestions++
        }
    }

    const isRight = (rightquestions / hint.questionIds.length) >= 0.5;


    return {
        hint: hint.hint,
        isRight
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export const Ping = connect(mapStateToProps, mapDispatchToProps)(PingC);