import React from "react";
import {connect} from "react-redux";
import {Map} from "immutable";
import ReactWordcloud from 'react-wordcloud';
import {AppState} from "../redux/interfaces/appState";

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
        <div className="qTitle">{question}</div>
        <div style={{height: 600, width: 1200}}>
            <ReactWordcloud
                words={toData(count)}
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
                    fontSizes: [50, 200],
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
    </div>
);

export function mapStateToProps(state: AppState): Props {
    // @ts-ignore
    const {question, count} = state.window as WordCloudState;
    return {question, count}
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(WordCloudC)