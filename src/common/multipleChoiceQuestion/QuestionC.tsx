import React from "react";
import {MultipleChoiceQuestion} from "../../player/interfaces/question";
import MultipleChoiceAnswer from "./MultipleChoiceAnswer";


interface Props {
    question: MultipleChoiceQuestion
    playerAnswer?: string
    dispatch: any
}

const questionC = ({question, playerAnswer, dispatch, className}: Props & {className? : string}) => {
    question = question || {};
    const answers = question.answers || [];
    return (
        <div className={className} style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                fontSize: "5vh",
                paddingBottom: "25px",
                textAlign: "center",
                whiteSpace: "pre-wrap"
            }}>{question.question}</div>
            {answers.map((v, index) =>
                <MultipleChoiceAnswer
                    key={index}
                    questionId={question.id}
                    answer={answers[index]}
                    playerAnswer={playerAnswer}
                    image={question.images && question.images[index]}
                    dispatch={dispatch}
                />)}
        </div>)
};

export default questionC