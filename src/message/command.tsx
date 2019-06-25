import React, {Component} from "react";
import {WaitScreen} from "../waiting/WaitScreen";
import {QuestionC, QuestionProps} from "../question/QuestionC";
import {Update} from "./update";
import {DisplayQuestionC} from "../displayBars/DisplayQuestionC";

export abstract class Command extends Component {
    update(update: Update){
        throw Error("Can't handle updates");
    }
}

export class WaitCommand extends Command {
    constructor() {
        super({})
    }

    render() {
        return (
            <WaitScreen></WaitScreen>
        )
    }
}

interface QuestionInput {
    q: string
    ans: string[]
}

export class NewQuestionCommand extends Command implements QuestionProps {
    question: string;
    answers: string[];
    answerCb: (answer: string) => void;


    constructor(obj: Object, ws: WebSocket) {
        super({});
        const qi = obj as QuestionInput;
        this.question = qi.q;
        this.answers = qi.ans;
        this.answerCb = (s: string) => ws.send(JSON.stringify({answer: s}));
    }


    render() {
        return <QuestionC question={this.question} answers={this.answers} answerCb={this.answerCb}></QuestionC>
    }
}

export class DisplayQuestionCommand extends Command {
    question: string;
    answers: string[];


    constructor(obj: Object, ws: WebSocket) {
        super({});
        const qi = obj as QuestionInput;
        this.question = qi.q;
        this.answers = qi.ans

    }


    render() {
        return <DisplayQuestionC question={this.question} answers={this.answers}></DisplayQuestionC>
    }
}

interface CommandoJson {
    name: String
    args: Object
}

export function commandFromObject(obj: CommandoJson, ws: WebSocket): Command {
    switch (obj.name) {
        case "newQuestion" : {
            return new NewQuestionCommand(obj.args, ws);
        }
        case "displayQuestion" : {
            return new DisplayQuestionCommand(obj.args, ws);
        }
        case "wait" : {
            return new WaitCommand();
        }
    }
    throw new Error("Unknown Command Name: " + obj.name)
}