import React, {FormEvent, MouseEventHandler} from "react";
import {TextInputState, TextInputType} from "../redux/states";
import {connect} from "react-redux";
import {handleTextInput, handleTextUpdate, waitScreen} from "../redux/actions";

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
        <div>
            <h2>{question}</h2>
            <textarea onChange={onChange} value={answer}></textarea>
            <button onClick={onClick(answer)}>Submit</button>
        </div>)
};

function mapStateToProps(state: TextInputState, ownProps: {}) {
    const {question, answer, type} = state;
    return {question, answer, type}
}

function mapDispatchToProps(dispatch: any, ownProps: {}) {
    return {
        onClick: (answer: string) => () => {
            dispatch(handleTextInput(answer));
            window.navigator.vibrate([100]);
            dispatch(waitScreen())
        },
        acceptChange: (str: string) => {
            // @ts-ignore
            dispatch(handleTextUpdate(str))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputC);