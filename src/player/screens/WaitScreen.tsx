import React from "react";
import Background from '../../img/logo.png';
import { Card, CardContent, Typography } from "@material-ui/core";


export const WaitScreen = (_: {}) => {
    const logobg = {
        backgroundPadding: '000px',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 'calc(100vh - 275px)',
        // width: '100vw',
        paddingTop: '-25px',
        backgroundPosition: "center",
    };
    {/*<div style={logobg}>Bedankt voor je input</div>;*/}
    return (<>
        <Card>
        <CardContent>
        <Typography component="div" style={{textAlign: 'center'}}>
            Geniet van de show! <br></br> Nieuwe vragen komen straks hier tevoorschijn.
        </Typography>
        </CardContent>
        </Card>
        <div style={logobg}>
    </div></>) 
};
