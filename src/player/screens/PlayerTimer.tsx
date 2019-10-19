import {TimerState} from "../../common/timerState";
import {connect} from "react-redux";
import RawTimerComponent from "../../common/progress/RawTimerComponent";
import {AppState} from "../interfaces/appState";
import styled from "styled-components"

function mapStateToProps(appState: AppState): TimerState {
    return appState.playerState.timerState
}

export default styled(connect(mapStateToProps)(RawTimerComponent))({
    height: "100px",
    width: "100px",
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: "10px"
})