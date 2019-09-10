import React, {FormEvent, FormEventHandler} from "react";
import {LoginState} from "../redux/states";
import {connect} from "react-redux";
import {handleTextUpdate, waitScreen} from "../redux/actions";
import {AppState} from "../redux/appstate";


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
            <h2>Welkom bij hoofdstof. Wat is je naam?</h2>
            <textarea onChange={onChange} value={name}></textarea>
            <button style={showButton}
                    onClick={() => {
                        doLogin(name);
                        finishLogin();
                    }}>Log In
            </button>
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