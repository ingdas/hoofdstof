import React from "react";
import Background from '../../img/logo.png';


export const DisplayWaitScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 25px)',
        width: '100%',
        marginTop: '-25px',
        backgroundPosition: "center",
    };
    return <div style={logobg}></div>;
};
