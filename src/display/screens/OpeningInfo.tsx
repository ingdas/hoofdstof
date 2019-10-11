import React from "react";
import Background from '../../img/logo.png';


export const OpeningInfo = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 100px)',
        width: '100%'

    };
    return <div style={logobg}>Welkom bij Hoofdstof. Connecteer met het Wifi-netwerk "hoofdstof" en surf naar http://192.168.1.100 </div>;
};
