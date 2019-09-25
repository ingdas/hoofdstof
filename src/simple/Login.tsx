import React, {FormEvent, FormEventHandler} from "react";
import {LoginState} from "../redux/states";
import {connect} from "react-redux";
import {handleTextUpdate, waitScreen} from "../redux/actions";
import {AppState} from "../redux/appstate";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


interface Props {
    doLogin: ((answer: string) => void)
    name: string
    onChange: FormEventHandler
    finishLogin: () => void
}

const LoginC = ({doLogin, finishLogin, onChange, name}: Props) => {
    console.log("Rendering Login");
    const showButton = name === "" ? {display: 'none'} : {};
    return (
        <div>
            <div style={{"backgroundColor" : "white"}}>
                <div className="qTitle">Welkom bij hoofdstof. Wat is je naam?</div>
                <div style={{"padding" : "10px", "backgroundColor": "white"}}>
                    <TextField
                        style={ {} }
                        label="Naam"
                        value={name}
                        onChange={onChange}
                    />
                </div>
                {name.length > 0 && <Button
                    style={{"margin": "20px"}}
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        doLogin(name);
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
        onChange: (evt: FormEvent) => {
            // @ts-ignore
            dispatch(handleTextUpdate(evt.target.value))
        },
        finishLogin: () => {
            dispatch(waitScreen())
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginC);