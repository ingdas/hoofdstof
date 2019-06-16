import React, {Component} from 'react';
import './App.css';
import Question from './question/Question'
import {QuestionC} from "./question/QuestionC";
import {Container} from "@material-ui/core";
import {WaitScreen} from "./Waiting/WaitScreen";

interface AppState {
    socket: WebSocket
    currentWindow: Component
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        const question = new Question("Wie?", ["A", "B", "C"]);
        const comp = new QuestionC(question);

        this.state = {
            socket: new WebSocket("ws://localhost:7070/play"),
            currentWindow: comp
        };
        this.initialiseApp()
    }

    render() {
        const bumperStyle = {
            height: "50px"
        };

        return <Container maxWidth="md">
            <div style={bumperStyle}/>
            {this.state.currentWindow.render()}
        </Container>
    }


    private initialiseApp() {
        const ws = this.state.socket
        ws.onmessage = (evt) => {
            const data = evt.data
            if (!data.q) {
                const newState: AppState = {socket: ws, currentWindow: new WaitScreen({})};
                this.setState(newState)

            }
        };
    }

}

export default App;
