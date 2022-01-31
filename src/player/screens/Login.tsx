import React, {useState} from "react";
import {connect} from "react-redux";
import {Card, CardContent, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {AppState} from "../interfaces/appState";
import {LoginState} from "../interfaces/playerState";
import {waitScreen} from "../playerActions";


interface Props {
    doLogin: ((answer: string) => void)
    finishLogin: () => void
}

const LoginC = ({doLogin, finishLogin}: Props) => {
    let [userName, setName] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center"
        }}>
            <Card>
            <CardContent>
            <Typography variant="h2" component="div">
                Welkom bij Hoofdstof!
            </Typography>
            </CardContent>
            </Card>

            <div style={{padding: "20px"}}></div>

            <Card>
            <CardContent>
            <Typography variant="h5" component="div">
                Wat is je naam?
            </Typography>
            <Typography>
                Wanneer jouw input gebruikt wordt in de show zal je naam getoond worden op het scherm.
            </Typography>

            <TextField
                    style={{color: "white"}}
                    label="Typ je naam hier"
                    value={userName}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </CardContent>
        </Card>
        <Button
            style={{"margin": "20px"}}
            variant="contained"
            color="primary"
            disabled={userName === ""}
            onClick={() => {
                doLogin(userName);
                finishLogin();
            }}
        >
            Log In
        </Button>
        </div>)
};

function mapStateToProps(state: AppState) {
    const playerState = state.playerState as LoginState;
    return {doLogin: playerState.onLogin}
}

function mapDispatchToProps(dispatch: any) {
    // noinspection JSUnusedGlobalSymbols
    return {
        finishLogin: () => {
            dispatch(waitScreen())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginC);