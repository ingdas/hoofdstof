import {TimerState} from "../../common/timerState";
import {connect} from "react-redux";
import RawTimerComponent from "../../common/progress/RawTimerComponent";
import {AppState} from "../interfaces/appState";

function mapStateToProps(appState: AppState): TimerState {
    return appState.playerState.timerState
}

export default connect(mapStateToProps)(RawTimerComponent)