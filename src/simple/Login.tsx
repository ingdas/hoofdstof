import React, {useState} from "react";
import {LoginState} from "../redux/states";
import {connect} from "react-redux";
import {waitScreen} from "../redux/actions";
import {AppState} from "../redux/appstate";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


interface Props {
    doLogin: ((answer: string) => void)
    finishLogin: () => void
}

const LoginC = ({doLogin, finishLogin}: Props) => {
    let [userName, setName] = useState("");

    return (
        <div>
            <div style={{"backgroundColor": "white"}}>
                <div className="qTitle">Welkom bij hoofdstof. Wat is je naam?</div>
                <div style={{"padding": "10px", "backgroundColor": "white"}}>
                    <TextField
                        style={{}}
                        label="Naam"
                        value={userName}
                        onChange={(event)=>{setName(event.target.value)}}
                    />
                </div>
                {userName.length > 0 && <Button
                    style={{"margin": "20px"}}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        doLogin(userName);
                        finishLogin();
                    }}
                >
                    Log In
                    <Icon>send</Icon>
                </Button>}
            </div>
        </div>)
};

function mapStateToProps(state: AppState) {
    const {doLogin, name} = state.window as LoginState;
    return {name, doLogin}
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