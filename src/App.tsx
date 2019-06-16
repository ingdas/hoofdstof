import React, {Component} from 'react';
import './App.css';
import Question from './question/Question'
import {Container} from "@material-ui/core";
import {commandFromObject} from "./command/command";

interface AppState {
    socket: WebSocket
    currentWindow: Component
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        const question = new Question("Wie?", ["A", "B", "C"]);

        this.state = {
            socket: new WebSocket("ws://localhost:7070/play"),
            currentWindow: question.makeComponent()
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
            const command = commandFromObject(JSON.parse(evt.data));
            const newComponent = command.makeComponent()
            const newState: AppState = {socket: ws, currentWindow: newComponent};
            this.setState(newState)
        };
    }

}

export default App;
