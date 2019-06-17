import {Component} from "react";
import {WaitScreen} from "../waiting/WaitScreen";
import {QuestionC, QuestionProps} from "../question/QuestionC";

export abstract class Command {

    abstract makeComponent(): Component
}

export class WaitCommand extends Command {
    makeComponent(): Component {
        return new WaitScreen({})
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
        super();
        const qi = obj as QuestionInput;
        this.question = qi.q;
        this.answers = qi.ans;
        this.answerCb = (s: string) => ws.send(JSON.stringify({answer: s}));
    }

    makeComponent(): Component {
        return new QuestionC(this)
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
        case "wait" : {
            return new WaitCommand();
        }
    }
    throw new Error("Unknown Command Name: " + obj.name)
}