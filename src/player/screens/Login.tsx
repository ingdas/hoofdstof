import React, {useState} from "react";
import {connect} from "react-redux";
import {TextField} from "@material-ui/core";
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
            alignItems: "center"
        }}>
            <div style={{
                fontSize: "45px",
                padding: "10px",
                textAlign: "center"
            }}>Welkom bij hoofdstof. <br/> Wat is je naam?
            </div>
            <div style={{"padding": "10px"}}>
                <TextField
                    style={{color: "white"}}
                    label="Naam"
                    value={userName}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
            </div>
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