import React from 'react';
import './App.css';
import Question from './question/Question'
import {QuestionC} from "./question/QuestionC";
import {Container} from "@material-ui/core";

const App: React.FC = () => {
    const question = new Question("Wie?", ["A", "B", "C"]);
    const comp = new QuestionC(question);

    const bumperStyle = {
        height: "50px"
    };

    return <Container maxWidth="md">
        <div style={bumperStyle}/>
        {comp.render()}
    </Container>

};

export default App;
