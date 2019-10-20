import React from "react";
import Background from '../../img/logo.png';


export const WaitScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100vh - 75px)',
        // width: '100vw',
        marginTop: '-25px',
        backgroundPosition: "center",
    };
    return <div style={logobg}></div>;
};
