import React from "react";
import {connect} from "react-redux";
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis,} from 'recharts';
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

const ChartQuestion = ({question, answerCount}: Props) => {
    const data = toData(answerCount);
    data.sort((a,b) => b.stemmen - a.stemmen);

    const CustomBarLabel = (a: any) => {
        const {index, x, y}: { index: number, x: number, y: number, value: string } = a;
        return <text x={x+20} y={y+70} fontSize="50" fill="#FFF" textAnchor="left">({data[index]["stemmen"]}) {data[index]["name"]}</text>;
    };

    return <div className="fullHeight">
        <div className="qTitle">{question}</div>
        <ResponsiveContainer width="100%" height="70%">
            <BarChart
                layout="vertical"
                data={data}
                margin={{
                    top: 5, bottom: 5,
                }}
            >
                <XAxis type="number" tick={false}/>
                <YAxis type="category" tick={false} dataKey="name"/>
                <Bar label={CustomBarLabel} dataKey="stemmen" fill="#8884d8"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
};

export function mapStateToProps(state: ChartQuestionState): Props {
    return state
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartQuestion)