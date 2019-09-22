import React from "react";
import Background from '../img/logo.png';
import {style} from "d3-selection";


export const AdminScreen = (_: {}) => {
    const logobg = {
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100% - 100px)',
        width: '100%'

    };
    return <div>Admin console here</div>;
};
