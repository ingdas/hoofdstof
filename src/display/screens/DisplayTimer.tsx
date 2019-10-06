import {TimerState} from "../../common/timerState";
import {connect} from "react-redux";
import RawTimerComponent from "../../common/progress/RawTimerComponent";
import {DisplayState} from "../redux/displayState";

function mapStateToProps(displayState: DisplayState): TimerState {
    return displayState.timerState;
}

export default connect(mapStateToProps)(RawTimerComponent)