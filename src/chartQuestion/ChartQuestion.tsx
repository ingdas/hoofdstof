import React from "react";
import {ChartQuestionState} from "../redux/states";
import {connect} from "react-redux";
import {List, Map} from "immutable";


interface Props {
    question: string
    answers: List<string>
    count: Map<number, number>
}

const ChartQuestion = ({question, answers, count}: Props) => (
    <div>
        <h2>{question}</h2>
        {answers.map((ans,key) => (<div>{ans} : {count.get(key,0)}</div>))}
    </div>
);

export function mapStateToProps(state: ChartQuestionState, ownProps: {}): Props {
    const {question, answers, count} = state;
    return {question, answers, count}
}

export function mapDispatchToProps(dispatch: any, ownProps: {}) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartQuestion)