import React, {Component} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import {Command, commandFromObject, WaitCommand} from "./message/command";
import {updateFromObject} from "./message/update";

interface AppState {
    socket: WebSocket
    command: Command
}

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        let url = "ws://" + window.location.hostname + ":7070/";
        if (document.location.pathname === "/d") {
            url += "display";
        } else {
            url += "play";
        }

        this.state = {
            socket: new WebSocket(url),
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
            const data = JSON.parse(evt.data);
            if (data.type === "command") {
                const command = commandFromObject(data, this.state.socket);
                const newState: AppState = {socket: ws, command: command};
                this.setState(newState)
            } else if (data.type === "update") {
                const update = updateFromObject(data, this.state.socket);
                this.state.command.update(update)
            } else {
                throw Error("Unknown Message type")
            }
        };
    }

}

export default App;
