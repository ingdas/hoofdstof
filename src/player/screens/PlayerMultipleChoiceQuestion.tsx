import {connect} from "react-redux";
import {AppState} from "../interfaces/appState";
import {PlayerPosingQuestion} from "../interfaces/playerState";
import {MultipleChoiceQuestion} from "../interfaces/question";
import QuestionC from "../../common/multipleChoiceQuestion/QuestionC";


export function mapStateToProps(state: AppState) {
    const question = ((state.playerState as PlayerPosingQuestion).question as MultipleChoiceQuestion);
    const playerAnswer = state.player.answers[question.id];
    return {question, playerAnswer}
}

export function mapDispatchToProps(dispatch: any) {
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionC);