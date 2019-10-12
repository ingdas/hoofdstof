import React from "react";
import {connect} from "react-redux";
import {Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis,} from 'recharts';
import {ChartQuestionState, DisplayState} from "../redux/displayState";
import {isDefined} from "../../util";

interface Props {
    question: string
    answerCount: Record<string, number>
    rightAnswer? : string
}

function toData(count: Record<string, number>): any[] {
    let data: any[] = [];
    for (const name of Object.keys(count)) {
        const stemmen = count[name];
        data.push({name, stemmen})
    }
    return data;
}

const ChartQuestion = ({question, answerCount, rightAnswer}: Props) => {
    question = question || "";
    answerCount = answerCount || {};
    const data = toData(answerCount);
    data.sort((a, b) => b.stemmen - a.stemmen);

    const CustomBarLabel = (a: any) => {
        const {index, x, y}: { index: number, x: number, y: number, value: string } = a;
        return <text x={x + 20} y={y + 70} fontSize="50" fill="white"
                     textAnchor="left">({data[index]["stemmen"]}) {data[index]["name"]}</text>;
    };

    return (<div className="fullHeight">
        <div className="qTitle">{question.toString()}</div>
        <ResponsiveContainer width="100%" height="70%">
            <BarChart
                layout="vertical"
                data={data}
                margin={{
                    top: 5, bottom: 5,
                }}
            >
                <XAxis type="number" tick={false} axisLine={false}/>
                <YAxis type="category" tick={false} dataKey="name" axisLine={false}/>
                <Bar label={CustomBarLabel} dataKey="stemmen" fill="rgb(102, 44, 143)">
                    {
                        data.map((entry, index) => {
                            if (isDefined(rightAnswer)) {
                                const color = entry.name === rightAnswer ? "green" : "red";
                                return <Cell fill={color}/>;
                            }
                            return "";
                        })
                    }
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>)
};

export function mapStateToProps(state: DisplayState): Props {
    return (state as ChartQuestionState);
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartQuestion)