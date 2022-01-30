import React from "react";
import {WachtBtn} from "./components/WachtBtn";
import SuggestieSelector from "./components/SuggestieSelector";
import {AdminState} from "./redux/adminState";
import {connect} from "react-redux";
import { Button } from "@material-ui/core";
import { endVideo } from "./action/sendAction";

export const R6SpeechC = () => {
    return (<div>
            <WachtBtn/>
            <br></br>
            <SuggestieSelector questionId="R0Woord"/>
            <br></br>
            <Button
                    color="primary"
                    onClick={endVideo}
                >
                    Start Video
                </Button>

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
