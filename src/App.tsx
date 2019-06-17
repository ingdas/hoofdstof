import React, {Component} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {commandFromObject, WaitCommand} from "./command/command";

interface AppState {
    socket: WebSocket
    currentWindow: Component
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            socket: new WebSocket("ws://localhost:7070/play"),
            currentWindow: new WaitCommand().makeComponent()
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
            const command = commandFromObject(JSON.parse(evt.data), this.state.socket);
            const newComponent = command.makeComponent();
            const newState: AppState = {socket: ws, currentWindow: newComponent};
            this.setState(newState)
        };
    }

}

export default App;
