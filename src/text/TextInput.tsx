import React, {FormEvent, MouseEventHandler} from "react";
import {TextInputState, TextInputType} from "../redux/states";
import {connect} from "react-redux";
import {handleTextInput, handleTextUpdate, waitScreen} from "../redux/actions";
import {vibrate} from "../util";
import {AppState} from "../redux/appstate";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./TextInput.css"

interface Props {
    type: TextInputType
    question: string,
    onClick: ((answer: string) => MouseEventHandler)
    answer: string
    acceptChange: ((answer: string) => void)
}

const TextInputC = ({question, onClick, acceptChange, answer, type}: Props) => {

    const onChange = function (evt: FormEvent) {
        // @ts-ignore
        const value: string = evt.target.value
        if (type === TextInputType.Number) {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                acceptChange(value)
            }
        } else {
            acceptChange(value)
        }
    };
    return (
        <div style={{"backgroundColor" : "white"}}>
            <div className="qTitle">{question}</div>
            <div style={{"padding" : "10px", "backgroundColor": "white"}}>
            <TextField
                style={ {} }
                label="Antwoord"
                value={answer}
                onChange={onChange}
            />
            </div>
            <Button
                style={{"margin": "20px"}}
                variant="contained"
                color="primary"
                onClick={onClick(answer)}
            >
                Send
                <Icon>send</Icon>
            </Button>
        </div>)
};

function mapStateToProps(state: AppState) {
    const {question, answer, type} = state.window as TextInputState;
    return {question, answer, type}
}

function mapDispatchToProps(dispatch: any) {
    return {
        onClick: (answer: string) => () => {
            dispatch(handleTextInput(answer));
            vibrate([100]);
            dispatch(waitScreen())
        },
        acceptChange: (str: string) => {
            // @ts-ignore
            dispatch(handleTextUpdate(str))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputC);
