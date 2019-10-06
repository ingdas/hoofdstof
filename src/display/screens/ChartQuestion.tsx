import React from "react";
import {connect} from "react-redux";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis,} from 'recharts';
import {ChartQuestionState} from "../redux/displayState";

interface Props {
    question: string
    answerCount: Record<string, number>
}

function toData(count: Record<string, number>): any[] {
    let data: any[] = [];
    for (const name of Object.keys(count)) {
        const stemmen = count[name];
        data.push({name, stemmen})
    }
    return data;
}

const ChartQuestion = ({question, answerCount}: Props) => (
    <div className="fullHeight">
        <div className="qTitle">{question}</div>
        <ResponsiveContainer width="80%" height="70%">
            <BarChart
                layout="vertical"
                data={toData(answerCount)}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="name"/>
                <Bar dataKey="stemmen" fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export function mapStateToProps(state: ChartQuestionState): Props {
    return state
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartQuestion)