import React from "react";

interface DisplayQuestionProps{
    question: string
    answers: string[]
}

interface DisplayQuestionState{
    counter: Map<string, number>
}

export class DisplayQuestionC extends React.Component<DisplayQuestionProps, DisplayQuestionState> {
    constructor(obj : DisplayQuestionProps) {
        super(obj)
        let ansMap = new Map<string,number>()
        obj.answers.forEach((a) => ansMap.set(a,0));
        this.state = {counter : ansMap}
    }

    render() {
        return <div>Here be barcharts</div>;
    }
}