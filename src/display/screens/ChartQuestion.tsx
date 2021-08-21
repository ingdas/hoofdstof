import React from "react";
import { connect } from "react-redux";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis, } from 'recharts';
import { ChartQuestionState, DisplayState } from "../redux/displayState";
import { isDefined, isNumeric } from "../../util";

interface Props {
    question: string
    answerCount: Record<string, number>
    rightAnswer?: string
}

function toData(count: Record<string, number>): any[] {
    let data: any[] = [];
    for (const name of Object.keys(count)) {
        const stemmen = count[name];
        data.push({ name, stemmen })
    }
    return data;
}

const ChartQuestion = ({ question, answerCount, rightAnswer }: Props) => {
    console.log(question, answerCount, rightAnswer)
    var sort = true

    if (isNumeric(rightAnswer) && isDefined(rightAnswer)) {
        const data: Record<string, number> = {};
        
        const rightAns = Number(rightAnswer)
        const underBound = Math.round(0.95 * rightAns)
        const upperBound = Math.round(0.95 * rightAns)
        
        const keys = ["Veel te laag (<"+ underBound + ")", 
                      "Net te laag (" + underBound + " - " + (rightAns - 1) + ")", 
                      "Exact (" + rightAns + ")", 
                      "Net te hoog (" + (rightAns + 1) + " - " + upperBound + ")", 
                      "Veel te hoog(>"+ upperBound + ")"
                    ]
        for (const i in keys) {
            data[keys[i]] = 0
        }
        for (const name of Object.keys(answerCount)) {
            const stemmen = answerCount[name];
            const currentAns = Number(name)
            if (currentAns < 0.95 * rightAns) {
                data[keys[0]] += stemmen
            } else if (currentAns < rightAns) {
                data[keys[1]] += stemmen
            } else if (currentAns == rightAns) {
                data[keys[2]] += stemmen
            } else if (currentAns <= 1.05 * rightAns) {
                data[keys[3]] += stemmen
            } else {
                data[keys[4]] += stemmen
            }
        }
        sort = false
        answerCount = data
    }

    question = question || "";
    answerCount = answerCount || {};
    const data = toData(answerCount);
    if(sort){
        data.sort((a, b) => b.stemmen - a.stemmen);
    }




    const CustomBarLabel = (a: any) => {
        const { index, x, y }: { index: number, x: number, y: number, value: string } = a;
        let fillColor = "white";
        if (isDefined(rightAnswer)) {
            if (data[index]["name"] === rightAnswer) {
                fillColor = "white"
            } else {
                fillColor = "grey"
            }
        }

        return <text x={x} y={y} dx={20} dy={5} fontSize="50" fill={fillColor}
            alignmentBaseline={"hanging"} >({data[index]["stemmen"]}) {data[index]["name"]}</text>;
    };

    return (<div className="fullHeight" style={{ marginTop: "50px" }}>
        {question.toString().length > 0 && <div style={{ fontSize: "50px", marginBottom: "50px" }}>{question.toString()}</div>}
        <ResponsiveContainer width="100%" height="70%">
            <BarChart
                layout="vertical"
                data={data}
                margin={{
                    top: 5, bottom: 5,
                }}
            >
                <XAxis type="number" tick={false} axisLine={false} />
                <YAxis type="category" tick={false} dataKey="name" axisLine={false} />
                <Bar label={CustomBarLabel} dataKey="stemmen" fill="rgb(102, 44, 143)" radius={[20, 20, 20, 20]}>
                    {
                        data.map((entry, index) => {
                            if (isDefined(rightAnswer)) {
                                const color = entry.name === rightAnswer ? "orange" : "rgb(82, 22, 123)";
                                return <Cell key={index} fill={color} />;
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