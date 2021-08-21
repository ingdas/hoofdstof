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
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import OpenQuestionDisplay from "./screens/OpenQuestion";
import ShowImage from "./screens/ShowImage";

interface Props {
    windowName: string
    pKey: string
}

/*
const Modal = motion.div({
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
});*/


const DisplayRoot = ({windowName, pKey}: Props) => {
    let appWindow : any;
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

    const variants = {
        initial: { opacity: 0.5, x : 0, y: 1000 },
        visible: { opacity: 1, x : 0, y: 0 },
        exit: { opacity: 0.5, x : 0, y: -1000 },
      }

    
    return (<Container maxWidth="lg">
        <DisplayTimer/>
        {Object.values(WindowName).map((cKey) => cKey == windowName && <motion.div
              initial="initial"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              variants={variants}
              key={cKey}
        >
            {appWindow}
        </motion.div>)}

    </Container>);

};

export function mapStateToProps(displayState: DisplayState): Props {
    return {windowName: displayState.windowName, pKey: JSON.stringify({...displayState, timerState: null})}
}

export default connect(mapStateToProps)(DisplayRoot)
