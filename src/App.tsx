import React, {Component} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {Command, commandFromObject, WaitCommand} from "./command/command";

interface AppState {
    socket: WebSocket
    command: Command
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            socket: new WebSocket("ws://" + window.location.hostname + ":7070/play"),
            command: new WaitCommand()
        };
        this.initialiseApp()
    }

    render() {
        const bumperStyle = {
            height: "50px"
        };

        const cont = (<Container maxWidth="md">
            <div style={bumperStyle}/>
            {this.state.command.render()}
        </Container>);
        return cont
    }


    private initialiseApp() {
        const ws = this.state.socket;
        ws.onmessage = (evt) => {
            const command = commandFromObject(JSON.parse(evt.data), this.state.socket);
            const newState: AppState = {socket: ws, command: command};
            this.setState(newState)
        };
    }

}

export default App;
