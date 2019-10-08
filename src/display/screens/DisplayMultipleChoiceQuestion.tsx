import {connect} from "react-redux";

import QuestionC from "../../common/multipleChoiceQuestion/QuestionC";
import {DisplayPosingQuestionState, DisplayState} from "../redux/displayState";
import {MultipleChoiceQuestion} from "../../player/interfaces/question";


export function mapStateToProps(state: DisplayState) {
    const question = ((state as DisplayPosingQuestionState).question as MultipleChoiceQuestion);
    const playerAnswer = "";
    return {question, playerAnswer}
}

export function mapDispatchToProps(dispatch: any) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionC);