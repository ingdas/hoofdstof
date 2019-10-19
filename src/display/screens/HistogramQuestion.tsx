import React from "react";
// @ts-ignore
import {Histogram, DensitySeries, BarSeries, withParentSize, XAxis, YAxis} from '@data-ui/histogram';

export const HistogramQuestion = ({question, answerCount, rightAnswer}: {
    question: string,
    answerCount: Record<string, number>,
    rightAnswer: string
}) => {
    const answers: number[] = [];

    for (const name of Object.keys(answerCount)) {
        const stemmen = answerCount[name];
        if (0 <= Number(name) && Number(name) < 2 * Number(rightAnswer)) {
            for (let i = 0; i < stemmen; i++) {
                answers.push(Number(name));
            }
        }
    }

    // @ts-ignore
    const ResponsiveHistogram = withParentSize(({parentWidth, parentHeight, ...rest}) => (
        <Histogram
            width={parentWidth}
            height={parentHeight}
            {...rest}
        />
    ));

    // @ts-ignore
    return <ResponsiveHistogram
        ariaLabel="My histogram of ..."
        orientation="vertical"
        cumulative={false}
        normalized={false}
        binCount={35}
        valueAccessor={(datum: any) => datum}
        binType="numeric"
        renderTooltip={({event, datum, data, color}: any) => (
            <div>
                <strong style={{color}}>{datum.bin0} to {datum.bin1}</strong>
                <div><strong>count </strong>{datum.count}</div>
                <div><strong>cumulative </strong>{datum.cumulative}</div>
                <div><strong>density </strong>{datum.density}</div>
            </div>
        )}
    >
        <BarSeries
            animated
            rawData={answers /* or binnedData={...} */}
            fill={"rgb(102, 44, 143)"}
        />
        <XAxis tickLabelProps={() => ({
            fontSize: "30px",
            textAnchor: 'top',
            dy: '30'
        })}/>
        <YAxis
            label={" "}
            tickLabelProps={() => ({
            fontSize: "30px",
            dx: '-30',
            textAnchor: 'right'
        })}/>
    </ResponsiveHistogram>


};