import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../img/logo.png';

export function OpeningInfo() {

    return (
        <>
            <Grid container spacing={1} style={{margin: "-20px"}}>
                <Grid item xs={12}>
                    <h1 style={{textAlign: "center", fontSize: "64px"}}>Welkom bij Hoofdstof</h1>
                </Grid>
                <Grid item xs={5}>
                    <img
                        alt="hoofdstof"
                        src={Logo}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "calc(100% - 150px)"
                        }}
                    />
                </Grid>
                <Grid item xs={7}>
                    <div style={{display: "table", height: "calc(100% - 150px)", overflow: "hidden"}}>
                        <div style={{display: "table-cell", verticalAlign: "middle"}}>
                    <span style={{
                        fontSize: '50px'
                    }}>
                    Neem je GSM<br/>
                    Connecteer met het wifi-netwerk "hoofdstof"<br/>
                    Surf naar http://www.hoofdstof.be
                    </span>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </>
    );
}