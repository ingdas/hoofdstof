import React from "react";
import {DisplayState, RoundIntroState} from "../redux/displayState";
import {connect} from "react-redux";


const ShowImageC = ({src}: {src : string}) => {
    const logobg = {
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100vh - 50px)',
        maxWidth: '100%',
        marginTop: '25px',
        backgroundPosition: "center",
    };
    return <div style={logobg}></div>;
};



export function mapStateToProps(state: DisplayState): {src : string} {
    return state as any
}

export function mapDispatchToProps(dispatch: any) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowImageC);