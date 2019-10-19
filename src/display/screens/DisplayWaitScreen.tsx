import React from "react";
import Background from '../../img/logo.png';


export const DisplayWaitScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 100px)',
        width: '100%',
        margin: '-50px',
        marginLeft: '165px'
    };
    return <div style={logobg}></div>;
};
