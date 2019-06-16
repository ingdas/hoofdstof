import {Component} from "react";
import {WaitScreen} from "../waiting/WaitScreen";
import Question from "../question/Question";

export abstract class Command {

    abstract makeComponent(): Component
}

export class WaitCommand extends Command {

    constructor(obj: Object) {
        super()
    }

    makeComponent(): Component {
        return new WaitScreen({})
    }
}

interface QuestionInput {
    q: string
    ans: string[]
}

export class NewQuestionCommand extends Command {
    question: Question

    constructor(obj: Object) {
        super();
        const qi = obj as QuestionInput
        this.question = new Question(qi.q, qi.ans)
    }

    makeComponent(): Component {
        return this.question.makeComponent()
    }
}

interface CommandoJson {
    name: String
    args: Object
}

export function commandFromObject(obj: CommandoJson): Command {
    switch (obj.name) {
        case "newQuestion" : {
            return new NewQuestionCommand(obj.args);
        }
        case "wait" : {
            return new WaitCommand(obj.args);
        }
    }
    throw new Error("Unknown Command Name: " + obj.name)
}