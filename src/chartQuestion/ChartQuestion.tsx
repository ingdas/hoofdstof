import React from "react";
import {AppState, ChartQuestionState} from "../redux/states";
import {connect} from "react-redux";


const ChartQuestion = (state: ChartQuestionState) => (
    <div>Here Be BarCharts</div>
);

export function mapStateToProps(state: AppState, ownProps: {}): ChartQuestionState {
    return state as ChartQuestionState
}

export function mapDispatchToProps(dispatch: any, ownProps: {}) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartQuestion)