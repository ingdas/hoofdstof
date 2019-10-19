import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";

export const R6SpeechC = () => {
    return (<div>
            <WachtBtn/>
            <br></br>
            <SuggestieSelector questionId="R0Woord"/>
        </div>
    )
};

function mapStateToProps(state: AdminState): {} {
    return {}
}

function mapDispatchToProps(dispatch: any) {
    return {};
}

export const R6Speech = connect(mapStateToProps, mapDispatchToProps)(R6SpeechC);
