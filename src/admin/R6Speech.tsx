import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "../redux/interfaces/adminState";
import {connect} from "react-redux";

export const R6SpeechC = () => {
    return (<div>
            <WachtBtn/>
            <br></br>
            <SuggestieSelector questionId="R0Woord"/>
        </div>
    )
};

function mapStateToProps(state: AdminState): AdminState {
    return state
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R6Speech = connect(mapStateToProps, mapDispatchToProps)(R6SpeechC);
