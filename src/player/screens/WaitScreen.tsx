import React from "react";
import Background from '../../img/logo.png';


export const WaitScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 100px)',
        width: '100%'

    };
    return <div style={logobg}>Kijk verder naar de show</div>;
};
