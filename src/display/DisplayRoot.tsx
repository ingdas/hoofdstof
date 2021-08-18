import React from 'react';
import {Container} from "@material-ui/core";
import {connect} from "react-redux";

import 'react-circular-progressbar/dist/styles.css';

import {DisplayState} from "./redux/displayState";
import {DisplayWaitScreen} from "./screens/DisplayWaitScreen";
import DisplayTimer from "./screens/DisplayTimer";
import {WindowName} from "../player/interfaces/windowName";
import PingSuggestion from "./screens/PingSuggestion";
import ChartQuestion from "./screens/ChartQuestion";
import DisplayMultipleChoiceQuestion from "./screens/DisplayMultipleChoiceQuestion";
import RoundIntro from "./screens/RoundIntro";
import {OpeningInfo} from "./screens/OpeningInfo";
import posed, {PoseGroup} from "react-pose";
import OpenQuestionDisplay from "./screens/OpenQuestion";
import ShowImage from "./screens/ShowImage";

interface Props {
    windowName: string
    pKey: string
}


const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: {type: 'spring', stiffness: 100, damping: 5},
            default: {duration: 300}
        }
    },
    exit: {
        y: -300,
        opacity: 0,
    }
});

const DisplayRoot = ({windowName, pKey}: Props) => {
    let appWindow;
    switch (windowName) {
        case WindowName.ChartQuestion:
            appWindow = <ChartQuestion key={pKey}/>;
            break;
        case WindowName.Ping:
            appWindow = <PingSuggestion key={pKey}/>;
            break;
        case WindowName.AnswerQuestion:
            appWindow = <DisplayMultipleChoiceQuestion key={pKey}/>;
            break;
        case WindowName.RoundIntro:
            appWindow = <RoundIntro key={pKey}/>;
            break;
        case WindowName.Opening:
            appWindow = <OpeningInfo key={pKey}/>;
            break;
        case WindowName.TextInput:
            appWindow = <OpenQuestionDisplay key={pKey}/>;
            break;
        case WindowName.ShowImage:
            appWindow = <ShowImage key={pKey}/>;
            break;
        case WindowName.WaitScreen:
        default: {
            pKey = "wait";
            appWindow = <DisplayWaitScreen key={pKey}/>;
            break;
        }
    }

    return (<Container maxWidth="lg">
        <DisplayTimer/>
        <PoseGroup>
            <Modal style={{height: 'calc( 100vh - 60px ) ', width: "100%"}} key={"modal"+pKey}>
                {appWindow}
            </Modal>
        </PoseGroup>
    </Container>);

};

export function mapStateToProps(displayState: DisplayState): Props {
    return {windowName: displayState.windowName, pKey: JSON.stringify({...displayState, timerState: null})}
}

export default connect(mapStateToProps)(DisplayRoot)
