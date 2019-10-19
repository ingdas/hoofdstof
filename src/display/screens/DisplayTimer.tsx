import {TimerState} from "../../common/timerState";
import {connect} from "react-redux";
import RawTimerComponent from "../../common/progress/RawTimerComponent";
import {DisplayState} from "../redux/displayState";
import {styled} from "@material-ui/core";

function mapStateToProps(displayState: DisplayState): TimerState {
    return displayState.timerState;
}

export default styled(connect(mapStateToProps)(RawTimerComponent))({
    height: "100px",
    width: "100px",
    position: "absolute",
    right: "50px",
    top: "50px",
    margin: "10px"
})