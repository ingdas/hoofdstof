import React from "react";
import Background from '../../img/logo.png';
import {Paper} from "@material-ui/core";


export const OpeningInfo = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 100px)',
        width: '100%',
        margin: '-50px'
    };
    return <div style={logobg}>
        <Paper style={{marginTop: "50px", fontSize: "64px", padding: "10px", backgroundColor: "rgba(255,255,255,0.5)"}}>Welkom bij Hoofdstof. Connecteer met het Wifi-netwerk "hoofdstof" en surf naar http://192.168.1.100</Paper>
    </div>;
};
