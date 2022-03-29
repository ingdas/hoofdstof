import React from 'react';
import Logo from '../../img/logo.png';

export function OpeningInfo() {

    return (
            <div style={{display: "flex", flexDirection: "column", padding: "-20px", alignContent: "center"}}>
                <h1 style={{textAlign: "center", fontSize: "80px", paddingTop: "10px"}}>Welkom bij Hoofdstof</h1>
                <div>
                    <img
                        alt="hoofdstof"
                        src={Logo}
                        style={{
                            height: "35vh",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </div>

                <div style={{
                    paddingTop: '0.5em',
                    fontSize: '50px',
                    textAlign: 'center'
                }}>
                    Neem je GSM<br/>
                    Connecteer met het wifi-netwerk "hoofdstof" <br /> (gebruik geen 4G!)<br/>
                    <p style={{fontWeight: "bold"}}>Surf naar: hoofdstof.be</p>
                </div>
            </div>
    );
}
