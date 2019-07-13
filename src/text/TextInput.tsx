import React, {FormEvent, FormEventHandler, MouseEventHandler} from "react";
import {TextInputState} from "../redux/states";
import {connect} from "react-redux";
import {handleAnswer, handleTextInput, handleTextUpdate} from "../redux/actions";

interface Props {
    question: string,
    onClick: ((answer: string) => MouseEventHandler)
    answer: string
    onChange : FormEventHandler
}

const TextInputC = ({question, onClick, onChange, answer}: Props) => {
    return (
        <div>
            <h2>{question}</h2>
            <textarea onChange={onChange} value={answer}></textarea>
            <button onClick={onClick(answer)}>Submit</button>
        </div>)
};

function mapStateToProps(state: TextInputState, ownProps: {}) {
    const {question, answer} = state;
    return {question, answer}
}

function mapDispatchToProps(dispatch: any, ownProps: {}) {
    return {
        onClick: (answer : string) => (evt : any) => {
            dispatch(handleTextInput(answer));
        },
        onChange: (evt : FormEvent) => {
            // @ts-ignore
            dispatch(handleTextUpdate(evt.target.value))
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextInputC);