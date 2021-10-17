import React from 'react';
import Logo from '../../img/logo.png';

export function OpeningInfo() {

    return (
            <div style={{display: "flex", flexDirection: "column", padding: "-20px", alignContent: "center"}}>
                <h1 style={{textAlign: "center", fontSize: "80px"}}>Welkom bij Hoofdstof</h1>
                <div>
                    <img
                        alt="hoofdstof"
                        src={Logo}
                        style={{
                            height: "45vh",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </div>

                <div style={{
                    paddingTop: '1em',
                    marginLeft: '1em',
                    fontSize: '50px',
                    textAlign: 'center'
                }}>
                    Neem je GSM<br/>
                    Connecteer met het wifi-netwerk "hoofdstof" <br/> (niet 4G!)<br/>
                    <p style={{fontWeight: "bold"}}>Surf naar: <br/> http://www.hoofdstof.be</p>
                </div>
            </div>
    );
}
