import React from "react";
import {WordCloudState} from "../redux/states";
import {connect} from "react-redux";
import {Map} from "immutable";
import ReactWordcloud from 'react-wordcloud';
import {AppState} from "../redux/appstate";

interface Props {
    question: string
    count: Map<string, number>
}


interface WordCloudEntry {
    text: string,
    value: number
}

function toData(count: Map<string, number>): WordCloudEntry[] {
    let data: WordCloudEntry[] = [];
    count.forEach((value, text) => data.push({text, value}));
    console.log(count, data);
    return data;
}

const WordCloudC = ({question, count}: Props) => (
    <div className="fullHeight">
        <h2>{question}</h2>
        <ReactWordcloud words={toData(count)}
                        options={{
                            colors: [
                                '#1f77b4',
                                '#ff7f0e',
                                '#2ca02c',
                                '#d62728',
                                '#9467bd',
                                '#8c564b',
                            ],
                            enableTooltip: true,
                            deterministic: false,
                            fontFamily: 'impact',
                            fontSizes: [50,200],
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            padding: 1,
                            rotations: 3,
                            rotationAngles: [0, 90],
                            scale: 'log',
                            spiral: 'archimedean',
                            transitionDuration: 1000,
                        }}/>
    </div>
);

export function mapStateToProps(state: AppState): Props {
    const {question, count} = state.window as WordCloudState;
    return {question, count}
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCloudC)