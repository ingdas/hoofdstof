import React from "react";
import Background from '../../img/logo.png';


export const WaitScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 75px)',
        width: '100%',
        marginTop: '-25px',
        backgroundPosition: "center",
    };
    return <div style={logobg}></div>;
};
