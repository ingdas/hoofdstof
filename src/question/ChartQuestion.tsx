import React from "react";
import {ChartQuestionState} from "../redux/states";
import {connect} from "react-redux";
import {List, Map} from "immutable";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis,} from 'recharts';

interface Props {
    question: string
    answers: List<string>
    count: Map<number, number>
}

function toData(answers: List<string>, count: Map<number, number>): any[] {
    let data: any[] = [];
    for (let i = 0; i < answers.size; i++) {
        data.push({name: answers.get(i), stemmen: count.get(i)})
    }
    return data;
}

const ChartQuestion = ({question, answers, count}: Props) => (
    <div className="fullHeight">
        <h2>{question}</h2>
        <ResponsiveContainer width="80%" height="70%">
            <BarChart
                layout="vertical"
                data={toData(answers, count)}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="name"/>
                <Bar dataKey="stemmen" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
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