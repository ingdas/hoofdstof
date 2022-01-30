import React from "react";
import {connect} from "react-redux";
import {PlayerHint} from "../interfaces/playerState";
import {AppState} from "../interfaces/appState";
import {isNumeric} from "../../util";
import { Card, CardContent, Typography } from "@material-ui/core";


interface Props {
    hint: string
    isRight: boolean
}

const ShowHintC = ({hint, isRight}: Props) => {
    if (isRight) {
        return (<Card>
        <CardContent>
        <Typography variant="h5" component="div">
        Onthoud de volgende hint voor de finale:
        </Typography>
        <Typography variant="h3" component="div" style={{textAlign: "center"}}>
        {hint}
        </Typography>
        </CardContent>
    </Card>)
    } else {
        return (<Card>
        <CardContent>
        <Typography variant="h5" component="div">
        Helaas, je hebt de vraag fout beantwoord.
        </Typography>
        </CardContent>
    </Card>)
    }
};

export function mapStateToProps(state: AppState): Props {

    const hint = (state.playerState as unknown as { hint: PlayerHint }).hint;

    let rightquestions = 0;

    for (let i = 0; i < hint.questionIds.length; i++) {
        const playerAnswer = state.player.answers[hint.questionIds[i]];
        const rightAnswer = hint.rightAnswers[i];
        if (playerAnswer === rightAnswer) {
            rightquestions++
        } else if (isNumeric(playerAnswer) && isNumeric(rightAnswer)) {
            if (Number(rightAnswer) * 0.95 <= Number(playerAnswer) &&
                Number(playerAnswer) <= Number(rightAnswer) * 1.05) {
                rightquestions++
            }
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

export const ShowHint = connect(mapStateToProps, mapDispatchToProps)(ShowHintC);