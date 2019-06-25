export abstract class Update {
}


interface SimpleAnswerInput {
    answer : string
    source: string
}

export class SimpleAnswer extends Update {
    answer: string;
    source: string;

    constructor(obj: Object) {
        super();
        const sa = obj as SimpleAnswerInput;
        this.answer = sa.answer;
        this.source = sa.source;
    }
}


interface UpdateJson {
    name: String
    args: Object
}

export function updateFromObject(obj: UpdateJson, ws: WebSocket): Update {
    switch (obj.name) {
        case "simpleAnswer" : {
            return new SimpleAnswer(obj);
        }
    }
    throw new Error("Unknown Update Name: " + obj.name)
}